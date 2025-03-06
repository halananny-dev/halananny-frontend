"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { Profile } from "./Profile"

export default function Page() {
	const { t } = useI18n()
	const { user } = useAppContext()

	return (
		<>
			<DashboardHeader title={t.dashboard.profile} />
			<Profile user={user} />
		</>
	)
}

