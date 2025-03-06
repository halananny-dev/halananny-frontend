"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { createBillingPortal, createCheckout, getCurrentPlanName } from "@/service/stripe";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Btn from "./Button";
import Card from "./Card";
import Loader from "./Loader";

interface Props {
  sm?: boolean
  isDashboard?: boolean
}

export const Plans: React.FC<Props> = ({ sm, isDashboard }) => {
  const { t } = useI18n();
  const containerRef = useRef<any>(null);
  const { plans, user } = useAppContext()
  const router = useRouter()
  const [currentPlan, setCurrentPlan] = useState<any>('Free Plan')

  useEffect(() => {
    const init = async () => {
      const plan = await getCurrentPlanName("madzoreraa@gmail.com")

      setCurrentPlan(plan || 'Free Plan')
    }

    init()

    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [])

  const getStarted = async (plan) => {
    if (!user) {
      return router.push("/login");
    }

    const url = await createCheckout(user.email, plan.priceId);

    if (url) {
      router.push(url)
    }
  };

  const manageSubscription = async (plan) => {
    if (!user) {
      return router.push("/login");
    }

    const { url } = await createBillingPortal(user.email)

    if (url) {
      router.push(url)
    }
  }



  return (
    <div id="plans" ref={containerRef} className="overflow-x-auto">
      {isDashboard && <h4 className="md:text-2xl text-xl font-semibold text-center">{t.dashboard.current_plan} {t.pricing[currentPlan]}</h4>}

      {Array.isArray(plans) && plans.length !== 0 ?
        <div className={"grid grid-cols-3 mt-10 md:mt-16 min-w-max " + (sm ? "gap-3" : "gap-8")}>
          {plans.toReversed().map((plan, index) => {
            const isPopular = index === 1
            const isCurrentPlan = currentPlan === plan.name

            return <div key={index} className={"h-full flex flex-col max-w-80 " + (sm ? "sm:max-w-[334px]" : "sm:max-w-96")}>
              <div className={`bg-white rounded-3xl relative text-gray-900 sm:p-8 p-4 border-[3px] grow shadow-xl ${isPopular ? "border-teal-500 -my-3" : ""}`}>
                {isPopular && (
                  <div className="absolute top-0 w-full flex left-0 justify-center">
                    <div className="bg-teal-500 h-10 w-40 rounded-b-xl text-white font-semibold flex items-center justify-center">
                      {t.pricing.mostPopular}
                    </div>
                  </div>
                )}
                <h3 className="text-4xl font-bold mt-8 text-center">
                  {t.pricing[plan.name]}
                </h3>
                <div className="flex items-center justify-center w-full">
                  {plan.description && (
                    <p className="mr-1 mt-6 line-through text-sm text-gray-400">
                      {t.currency} {Math.floor(plan.price / ((100 - Number(plan.description)) / 100))}
                    </p>
                  )}
                  <h5 className="mt-6 font-semibold text-2xl text-center">
                    {t.currency} {plan.price}
                  </h5>
                  {plan.description && (
                    <h5 className="mt-6 font-semibold text-center drop-shadow-md ltr:ml-3 rtl:mr-3 border border-teal-500 rounded-full text-10 px-2.5 py-1 text-teal-500">
                      {plan.description}%  {t.pricing.off}
                    </h5>
                  )}
                </div>
                <p className="mt-4 text-center text-gray-500">
                  {t.pricing.refund}
                </p>
                <Btn
                  disabled={isCurrentPlan}
                  onClick={() => getStarted(plan)}
                  size="md"
                  className="mt-5"
                  variant="primary">
                  {isCurrentPlan ? t.pricing.subscribed : t.pricing.getStarted}
                </Btn>
                <ul className="space-y-4 mt-8">
                  {plan.marketing_features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <FaCheck className="min-w-3 text-sm mt-1.5 text-teal-500" />
                      <span>
                        {t.pricing[feature.name]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Btn
                size="lg"
                onClick={() => manageSubscription(plan)}
                className="mt-9"
                variant={plan.popular ? "primary" : "primary-outlined"}
              >
                {t.pricing.choose} {t.pricing[plan.name]}
              </Btn>
            </div>
          })}
        </div>
        : <Loader className="mt-10" />}
    </div>
  )
}

export default function Pricing() {
  const { t } = useI18n()

  return (
    <Card title={t.pricing.title}>
      <Plans />
    </Card>
  );
}
