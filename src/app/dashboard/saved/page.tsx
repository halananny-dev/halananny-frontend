"use client"

import { nannies } from "@/components/constants";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Nanny from "@/components/dashboard/Nanny";
import { useI18n } from "@/i18/i18Context";

export default function Saved() {
  const { t } = useI18n()

  return (
    <>
      <DashboardHeader title={t.dashboard["Saved Nannies"]} />
      <div className="lg:p-18 py-10 px-4 sm:p-10">
        <div className="mt-20 flex flex-wrap justify-center max-w-7xl mx-auto grid-cols-3 gap-x-5 gap-y-4.5">
          {[...nannies, ...nannies].map((nanny, i) => (
            <Nanny key={i} nanny={nanny} />
          ))}
        </div>
      </div>
    </>
  )
}