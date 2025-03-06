"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import { useI18n } from "@/i18/i18Context"
import { Profile } from "./Profile"



export default function Page() {
	const { t } = useI18n()

	return (
		<>
			<DashboardHeader title={t.dashboard.profile} />
			<Profile userId="b8f269cf-9200-45df-b85c-4235e716f09e" />
		</>
	)
}

