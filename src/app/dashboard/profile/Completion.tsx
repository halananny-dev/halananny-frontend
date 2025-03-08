"use client"

import { useI18n } from '@/i18/i18Context'

export default function Completion() {
	const { t } = useI18n()
	const completion = 0
	const points = 0
	const totalPoints = 20

	return (
		<div className="mt-7 card">
			<p className="text-sm font-medium">{t.dashboard['Profile completion']}</p>
			<div className="mt-1 text-xs font-medium flex justify-between">
				<p><span className="text-2xl font-bold">{completion}%</span> {t.dashboard['Complete']}</p>
				<p className="mt-3">{t.dashboard.earning} {points}/{totalPoints} {t.dashboard.point}</p>
			</div>
			<div className="h-2 w-full bg-gray-ea rounded-full mt-1">
				<div
					className="rounded-full bg-yellow-600 h-full"
					style={{
						width: (points > totalPoints ? totalPoints : points) / totalPoints + "%"
					}}
				></div>
			</div>
		</div >
	)
}
