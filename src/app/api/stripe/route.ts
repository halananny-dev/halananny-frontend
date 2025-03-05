import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: process.env.NEXT_PUBLIC_STRIPE_API_VERSION as any,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  let event;

  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  const subscription = event.data.object;
  const customerId = subscription.customer as string;

  const customer = await stripe.customers.retrieve(customerId);
  const email = (customer as Stripe.Customer).email;

  const price = subscription.items.data[0].price;
  const productId = price.product as string;

  const product = await stripe.products.retrieve(productId);
  const productName = product.name;

  switch (event.type) {
    case "customer.subscription.created":
      await supabase
        .from("users")
        .update({ plan: productName })
        .eq("email", email);
      break;

    case "customer.subscription.updated":
      const activeSubscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: "active",
      });

      for (const sub of activeSubscriptions.data) {
        await stripe.subscriptions.cancel(sub.id);
      }
      const paymentMethodId =
        subscription.default_payment_method ||
        subscription.payment_settings?.payment_method_types?.[0];

      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customerId,
      });

      await stripe.customers.update(customerId, {
        invoice_settings: { default_payment_method: paymentMethodId },
      });

      await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: price.id }],
        default_payment_method: paymentMethodId,
        expand: ["latest_invoice.payment_intent"],
      });

      await supabase
        .from("users")
        .update({ plan: productName })
        .eq("email", email);

      break;
    case "customer.subscription.deleted":
      await supabase.from("users").update({ plan: "" }).eq("email", email);
      break;
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
