import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);

export async function getProducts() {
  const { data: products } = await stripe.products.list({
    active: true,
    expand: ["data.default_price"],
  });

  const formattedProducts = products.map((product) => {
    const price: any = product.default_price;

    return {
      id: product.id,
      name: product.name,
      description: product.description || "",
      price: price?.unit_amount ? price.unit_amount / 100 : 0,
      priceId: price?.id,
      marketing_features: product.marketing_features,
    };
  });

  return formattedProducts;
}

export const createCheckout = async (email, priceId) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/plan`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/plan`,
  });

  return session.url;
};

export async function createBillingPortal(customerEmail: string) {
  try {
    const customers = await stripe.customers.list({ email: customerEmail });

    if (!customers.data.length) {
      throw new Error("Customer not found");
    }

    const customerId = customers.data[0].id;

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/plan`,
    });

    return { success: true, url: session.url };
  } catch (error: any) {
    console.error("❌ Error creating billing portal:", error);
    return { success: false, error: error.message };
  }
}
