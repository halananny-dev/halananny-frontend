"use client";

import { FaCheck } from "react-icons/fa";
import { useI18n } from "@/i18/i18Context";
import { plans } from "../constants";
import Btn from "./Button";
import Card from "./Card";

export default function Pricing() {
  const { t } = useI18n();

  return (
    <Card title={t.pricing.title}>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, index) => (
          <div key={index} className="h-full flex flex-col">
            <div
              className={`bg-white rounded-3xl relative text-gray-900 p-8 border-[3px] grow shadow-xl ${plan.popular ? "border-teal-500 -my-3" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 w-full flex left-0 justify-center">
                  <div className="bg-teal-500 h-10 w-40 rounded-b-xl text-white font-semibold flex items-center justify-center">
                    {t.pricing.mostPopular}
                  </div>
                </div>
              )}
              <h3 className="text-4xl font-bold mt-8 text-center">
                {t.pricing.plans[plan.name.toLowerCase()].name}
              </h3>
              <div className="flex items-center justify-center w-full">
                {plan.discount && (
                  <p className="mr-1 mt-6 line-through text-sm text-gray-400">
                    AED 380
                  </p>
                )}
                <h5 className="mt-6 font-semibold text-2xl text-center">
                  {t.pricing.plans[plan.name.toLowerCase()].price}
                </h5>
                {plan.discount && (
                  <h5 className="mt-6 font-semibold text-center drop-shadow-md ml-3 border border-teal-500 rounded-full text-10 px-2.5 py-1 text-teal-500">
                    {t.pricing.plans['premium plan'].discount}
                  </h5>
                )}
              </div>
              <p className="mt-4 text-center text-gray-500">
                {t.pricing.refund}
              </p>
              <Btn size="md" className="mt-5" variant="primary">
                {t.pricing.getStarted}
              </Btn>
              <ul className="space-y-4 mt-8">
                {plan.features.map((_, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <FaCheck className="min-w-3 text-sm mt-1.5 text-teal-500" />
                    <span>
                      {t.pricing.plans[plan.name.toLowerCase()].features[idx]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Btn
              size="lg"
              className="mt-9"
              variant={plan.popular ? "primary" : "primary-outlined"}
            >
              {t.pricing.choose.replace(
                "{plan}",
                t.pricing.plans[plan.name.toLowerCase()].name
              )}
            </Btn>
          </div>
        ))}
      </div>
    </Card>
  );
}
