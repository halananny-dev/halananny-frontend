"use client"

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { getAge } from "@/lib/utils";
import { getNanny, removeNanny, saveNanny } from "@/service/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import Flag from "react-world-flags";
import Img from "../sections/Img";
import { Button } from "../ui/button";

export default function Nanny({ nanny }) {
	const { t } = useI18n()
	const router = useRouter()
	const { countries } = useAppContext()
	const user = { id: "e0ba6bc6-80c6-41ad-8615-046b2f4ee0f2" }
	const [isSaved, setIsSaved] = useState(false)

	useEffect(() => {
		const init = async () => {
			const isSaved = await getNanny(user.id, nanny.id)

			setIsSaved(!!isSaved)
		}
		init()
	}, [])

	const handleSave = () => {
		if (!isSaved) {
			saveNanny(user.id, nanny.id)
		}
		else {
			removeNanny(user.id, nanny.id)
		}

		setIsSaved(!isSaved)
	}

	const { id, profile_photo_url, name, country_id, date_of_birth,
		verified_at,
		available_city, years_of_experience, language, phone_number, available_from } = nanny

	return (
		<div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow max-w-390 w-full">
			<div className="py-1 text-green-300 text-center bg-green-100">
				{t.dashboard.match} <span className="font-bold ml-1">99%</span>
			</div>
			<div className="p-4">
				<div className="flex justify-between items-start">
					<div className="flex gap-4 items-start">
						<img
							src={profile_photo_url}
							className="rounded-md w-28 h-28 object-cover"
						/>
						<div className="flex flex-col gap-2.5">
							<div className="flex items-center gap-1 mb-0.5">
								<h3 className="text-lg font-semibold text-gray-900">
									{name}
								</h3>
								{verified_at && <Img src="/verified-badge.svg" />}
							</div>

							<div className="flex items-center gap-2">
								<Flag code={countries.find(e => e.id === country_id)?.flag} className="w-5 h-5 rounded-full cover" />
								<h3 className="text-gray-900">{countries.find(e => e.id === country_id)?.country_name}</h3>
							</div>
							<div className="flex items-center gap-2">
								<Img src="/calendar.svg" />
								<h3 className="text-gray-900">{getAge(date_of_birth)}</h3>
							</div>
							<div className="flex items-center gap-2">
								<Img src="/map.svg" />
								<h3 className="text-gray-900">{available_city?.join(', ')}</h3>
							</div>
						</div>
					</div>
					<button
						onClick={handleSave}
						className="text-teal-500 text-xl">
						{isSaved ? <FaBookmark /> : <CiBookmark />}
					</button>
				</div>
				<div className="mt-4 text-gray-900 rounded-lg text-xs bg-gray-800 py-3.5 px-2.5 flex items-center justify-between text-center">
					<div className="flex-1 flex flex-col gap-2.5">
						<p className="text-gray-300">{t.nannies.experience}</p>
						<h6 className="font-semibold line-clamp-2">{years_of_experience} {t.years}</h6>
					</div>
					<div className="flex-1 flex flex-col gap-2.5">
						<p className="text-gray-300">{t.nannies.languages}</p>
						<h6 className="font-semibold">{language?.join(' ')}</h6>
					</div>
					<div className="flex-1 flex flex-col gap-2.5">
						<p className="text-gray-300">{t.dashboard.availability}</p>
						<h6 className="font-semibold">{new Date(available_from).toDateString()}</h6>
					</div>
				</div>

				<div className="mt-4 flex gap-3">
					<Button
						onClick={() => router.push('/nannies' + id)}
						variant="outline"
						className="border-teal-500 text-teal-500 text-xs rounded-md hover:text-teal-500 w-full"
					>
						{t.dashboard['See my profile']}
					</Button>
					<Button
						onClick={() => window.open(`https://wa.me/${phone_number}`, "_blank")}
						variant="outline"
						className="border-green-800 bg-green-10 text-xs rounded-md hover:text-teal-500 w-full"
					>
						<Img src="/whatsapp.svg" />
						<span className="text-green-800">{t.dashboard['Contact via WhatsApp']}</span>
					</Button>
				</div>
				{/* <Button
					variant="outline"
					className="border-none text-gray-900 bg-gray-800 text-xs rounded-md hover:text-gray-900 mt-3 w-full"
				>
					<Img src="/camera.svg" />
					<span>{t.dashboard['Schedule Interview']}</span>
				</Button> */}
			</div>
		</div>
	)
}
