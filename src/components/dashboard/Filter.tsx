"use client"

import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { AVAILABILITY, COUNTRIES, LANGUAGES } from "../constants"
import Btn from "../sections/Button"
import CustomSelect from "../sections/CustomSelect"
import Img from "../sections/Img"

export default function Filter() {
	const { t } = useI18n()
	const { capabilities, experienceWithKids } = useAppContext()

	const fields = [
		{ label: "Location", options: COUNTRIES.map(e => e.name), groupName: 'countries' },
		{ label: "Experience", options: experienceWithKids.map(e => e.title), groupName: 'experience-with-kids' },
		{ label: "Skill", options: capabilities.map(e => e.name), groupName: 'capabilities' },
		{ label: "Language", options: LANGUAGES, groupName: 'languages' },
		{ label: "Availability", options: AVAILABILITY, groupName: 'availability' },
	]

	return (
		<div className="w-full xl:px-11 mt-11 xl:max-w-6xl max-w-7xl mx-auto">
			<form className="flex flex-col items-center">
				<div className="flex w-full rounded-3xl border drop-shadow-filter border-gray-200 bg-white xl:p-4 p-2">
					<div className="grow grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
						{fields.map(({ label, options, groupName }, index) => (
							<div key={index} className={"h-full xl:gap-2 gap-1 flex flex-col md:flex-row md:items-center xl:px-2 px-2.5 md:py-0 py-2 " + (index !== 0 ? "md:ltr:border-l md:rtl:border-r md:border-gray-200" : "")}>
								<p className="font-bold xl:text-sm text-xs text-gray-900">{t.dashboard[label]}</p>
								<CustomSelect
									groupName={groupName}
									placeholder={t.dashboard.all}
									className="grow p-2 md:min-h-0 min-w-10 text-xs xl:text-base h-10 md:border-0 md:!shadow-none"
									options={options} />
							</div>
						))}
					</div>
					<Btn variant="primary" size="lg" className="w-14 h-14 hidden xl:block rounded-18 border-none hover:bg-teal-500">
						<Img src="/magnify.svg" />
					</Btn>
				</div>

				<Btn variant="primary" size="md" className="h-10 max-w-390 mx-auto mt-4 xl:hidden rounded-18 border-none hover:bg-teal-500">
					<Img src="/magnify.svg" className="w-6" />
					<span>Search</span>
				</Btn>
			</form>
		</div>
	)
}