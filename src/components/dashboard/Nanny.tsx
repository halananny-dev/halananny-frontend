"use client"

import { useI18n } from "@/i18/i18Context";
import Img from "../sections/Img";
import { Button } from "../ui/button";

export default function Nanny({ nanny }) {
	const { t } = useI18n()

	const { image, name, country, age, location, experience, language, desired_salary } = nanny

	return (
		<div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow max-w-390 w-full">
			<div className="py-1 text-green-300 text-center bg-green-100">
				{t.dashboard.match} <span className="font-bold ml-1">99%</span>
			</div>
			<div className="p-4">
				<div className="flex justify-between items-start">
					<div className="flex gap-4 items-start">
						<Img
							src={image}
							width={112}
							height={112}
							className="rounded-md object-cover"
						/>
						<div className="flex flex-col gap-2.5">
							<div className="flex items-center gap-1 mb-0.5">
								<h3 className="text-lg font-semibold text-gray-900">
									{name}
								</h3>
								<Img src="/verified-badge.svg" />
							</div>

							<div className="flex items-center gap-2">
								<Img src="/egypt.svg" />
								<h3 className="text-gray-900">{country}</h3>
							</div>
							<div className="flex items-center gap-2">
								<Img src="/calendar.svg" />
								<h3 className="text-gray-900">{age}</h3>
							</div>
							<div className="flex items-center gap-2">
								<Img src="/map.svg" />
								<h3 className="text-gray-900">{location}</h3>
							</div>
						</div>
					</div>
					<button>
						<Img src="/save.svg" />
					</button>
				</div>
				<div className="mt-4 text-gray-900 rounded-lg text-xs bg-gray-800 py-3.5 px-2.5 flex items-center justify-between text-center">
					<div className="flex-1 flex flex-col gap-2.5">
						<p className="text-gray-300">{t.nannies.experience}</p>
						<h6 className="font-semibold line-clamp-2">{experience}</h6>
					</div>
					<div className="flex-1 flex flex-col gap-2.5">
						<p className="text-gray-300">{t.nannies.languages}</p>
						<h6 className="font-semibold">{language}</h6>
					</div>
					<div className="flex-1 flex flex-col gap-2.5">
						<p className="text-gray-300">{t.dashboard.availability}</p>
						<h6 className="font-semibold">10 Feb 2024</h6>
					</div>
				</div>

				<div className="mt-4 flex gap-3">
					<Button
						variant="outline"
						className="border-teal-500 text-teal-500 text-xs rounded-md hover:text-teal-500 w-full"
					>
						{t.dashboard['See my profile']}
					</Button>
					<Button
						variant="outline"
						className="border-green-800 text-green-800 bg-green-10 text-xs rounded-md hover:text-teal-500 w-full"
					>
						<Img src="/whatsapp.svg" />
						<span>{t.dashboard['Contact via WhatsApp']}</span>
					</Button>
				</div>
				<Button
					variant="outline"
					className="border-none text-gray-900 bg-gray-800 text-xs rounded-md hover:text-gray-900 mt-3 w-full"
				>
					<Img src="/camera.svg" />
					<span>{t.dashboard['Schedule Interview']}</span>
				</Button>
			</div>
		</div>
	)
}
