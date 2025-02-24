"use client";
import { useI18n } from "@/i18/i18Context";
import Card from "./Card";
import Img from "./Img";

export default function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <Card title={t.why_choose_us_title}>
      <div className="grid lg:grid-cols-3 justify-center md:mt-20 mt-10 items-center gap-8">
        {t.reasons.map(({ img, description, title }: any, index: number) => (
          <div key={index} className="flex flex-col text-center justify-between h-full items-center flex-1">
            <Img src={img} />
            <div>
              <h3 className="xl:text-40 leading-snug text-2xl text-gray-900 font-bold mt-8">{title}</h3>
              <p className="mt-4 text-gray-900">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
