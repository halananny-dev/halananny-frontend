"use client";

import { useI18n } from "@/i18/i18Context";
import Card from "./Card";
import Img from "./Img";

export default function Steps() {
  const { t } = useI18n();

  return (
    <Card title={t.steps_title}>
      <div className="flex mt-32 justify-between relative">
        {t.steps.map(({ img, description, title }: any, index: number) => (
          <div key={index} className="flex max-w-72 items-center text-center flex-col">
            <div className="relative w-full flex justify-center">
              <Img src={img} className="h-32 z-40" />
            </div>
            <h3 className="text-2xl text-gray-900 font-semibold mt-8">
              <span className="text-teal-500">{index + 1}· </span>
              {title}
            </h3>
            <p className="mt-4 text-gray-900 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
