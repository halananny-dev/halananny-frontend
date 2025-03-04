"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Filter from "@/components/dashboard/Filter";
import Nanny from "@/components/dashboard/Nanny";
import Title from "@/components/sections/Title";
import { useI18n } from "@/i18/i18Context";
import { getNannies } from "@/service/user";
import { useEffect, useState } from "react";
import Assistant from "../../components/dashboard/Assistant";

export default function Dashboard() {
	const { t } = useI18n()
	const [nannies, setNannies] = useState<any>([])

	useEffect(() => {
		const init = async () => {
			const nannies = await getNannies()

			setNannies(nannies)
		}

		init()
	}, [])

	return (
		<>
			<DashboardHeader title={<>{t.dashboard.welcome} Fatima ! <br />
				{t.dashboard.find}
			</>} />
			<div className="xl:p-18 py-10 px-4">
				<Title typographyClass="md:!text-3xl">
					{t.dashboard.meet}
				</Title>
				<Assistant />
				<Filter />
				<div className="mt-20 flex flex-wrap justify-center max-w-7xl mx-auto grid-cols-3 gap-x-5 gap-y-4.5">
					{nannies.map((nanny, i) => (
						<Nanny key={i} nanny={nanny} />
					))}
				</div>
			</div>
		</>
	)
}