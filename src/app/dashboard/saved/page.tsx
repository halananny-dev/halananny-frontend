"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Nanny from "@/components/dashboard/Nanny";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { getSavedNannies } from "@/service/user";
import { useEffect, useState } from "react";

export default function Saved() {
  const { t } = useI18n()
  const [nannies, setNannies] = useState<any>([])
  // const { user } = useAppContext()
  const user = { id: "e0ba6bc6-80c6-41ad-8615-046b2f4ee0f2" }

  useEffect(() => {
    const init = async () => {
      const nannies = await getSavedNannies(user.id)
      console.log(nannies)

      setNannies(nannies)
    }

    init()
  }, [])

  return (
    <>
      <DashboardHeader title={t.dashboard["Saved Nannies"]} />
      <div className="lg:p-18 py-10 px-4 sm:p-10">
        <div className="flex flex-wrap justify-center max-w-7xl mx-auto grid-cols-3 gap-x-5 gap-y-4.5">
          {nannies.length !== 0 ? nannies.map((nanny, i) => (
            <Nanny key={i} nanny={nanny} />
          )) : <p className="text-lg">{t['No Nannies Found ):']}</p>}
        </div>
      </div>
    </>
  )
}