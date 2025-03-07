"use client"

import { useI18n } from "@/i18/i18Context";
import Btn from "./Button";
import Card from "./Card";
import Img from "./Img";
import Title from "./Title";

export default function Preferences() {
  const { t } = useI18n();

  return (
    <Card className="bg-teal-300 mt-7 flex flex-col-reverse gap-4 lg:flex-row items-center justify-between xl:px-20 md:py-14">
      <div className="max-w-lg">
        <Title className="!items-start">{t.preferencesTitle}</Title>
        <p className="text-xl text-gray-900 font-medium mt-9">{t.preferencesDescription}</p>
        <Btn variant="primary" size='xl' className='mt-14 font-bold text-xl'>
          {t.preferencesButton}
        </Btn>
      </div>
      <Img src="/preference.svg" />
    </Card>
  );
}