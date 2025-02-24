"use client";
import { useI18n } from "@/i18/i18Context";
import Card from "./Card";
import Img from "./Img";

export default function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <Card title={t.why_choose_us_title}>
      <div className="flex mt-20 items-center gap-8 justify-between">
        {t.reasons.map(({ img, description, title }: any, index: number) => (
          <div key={index} className="flex flex-col text-center items-center flex-1">
            <Img src={img} />
            <h3 className="text-40 text-gray-900 font-bold mt-8">{title}</h3>
            <p className="mt-4 text-gray-900">{description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
