"use client";

import { FaArrowRight } from "react-icons/fa";
import Btn from "./Button";
import { useI18n } from "@/i18/i18Context";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="max-w-max mt-4 py-32 px-40 mx-auto">
      <div className="flex items-center justify-between rtl:flex-row-reverse">
        <div className="max-w-xl">
          <h1 className="text-5xl leading-snug font-bold text-gray-900">
            {t.hero_title.split("{highlight1}")[0]}
            <span className="text-teal-500">{t.hero_highlight1}</span>
            {t.hero_title.split("{highlight1}")[1]?.split("{highlight2}")[0]}
            <span className="text-teal-500">{t.hero_highlight2}</span>
            {t.hero_title.split("{highlight2}")[1]}
          </h1>
          <p className="text-lg text-gray-900 font-semibold font-sans mt-3">
            {t.hero_description}
          </p>
          <Btn size="xl" variant="primary" className="mt-9 w-96">
            {t.hero_button} <FaArrowRight className="inline-block ml-1" />
          </Btn>
        </div>
      </div>
    </section>
  );
}
