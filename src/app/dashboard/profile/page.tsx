"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import { useI18n } from "@/i18/i18Context"
import { Profile } from "./Profile"



export default function Page() {
	const { t } = useI18n()

	return (
		<>
			<DashboardHeader title={t.dashboard.profile} />
			<Profile userId="e0ba6bc6-80c6-41ad-8615-046b2f4ee0f2" />
		</>
	)
}

