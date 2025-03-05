"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Card from "@/components/sections/Card";
import { Plans } from "@/components/sections/Pricing";
import { useI18n } from "@/i18/i18Context";

export default function Plan() {
  const { t } = useI18n()

  return (
    <>
      <DashboardHeader title={t.pricing.title} />
      <Card>
        <Plans isDashboard />
      </Card>
    </>
  )
}