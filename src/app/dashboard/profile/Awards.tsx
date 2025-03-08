"use client"

import Img from "@/components/sections/Img";
import { useI18n } from "@/i18/i18Context";

export default function Awards() {
	const { t } = useI18n()

	return (
		<div className="mt-4 card">
			<p className="text-sm font-medium">{t.dashboard.award}</p>
			<div className="mt-1 text-xs font-medium flex justify-between items-center">
				<p className="text-lg font-bold">{t.dashboard.skill}</p>
				<Img src="/badge.svg" />
			</div>
			<Img src="/stars.svg" className="mt-3" />
		</div>
	)
}
