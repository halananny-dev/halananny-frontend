"use client"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import Img from "@/components/sections/Img"
import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { FaPlay, FaPlus } from "react-icons/fa"
import GeneralInformation from "./GeneralInformation"
import Identity from "./Identity"
import Rating from "./Rating"
import Title from "./Title"


export default function Profile() {
	const { t } = useI18n()
	const { capabilities } = useAppContext()

	const documents = [
		{ img: "/id.svg", name: "ID" },
		{ img: "/id.svg", name: "Driving Licence" },
		{ img: "/id.svg", name: "Exam Certificate" },
	]

	const details = [
		{ name: "City availble to work", value: "Dubai" },
		{ name: "Desired monthly salary(AED)", value: "More than 3200" },
		{ name: "City availble to work", value: "Dubai" },
		{ name: "Languages", value: "" },
		{ name: "Desired job", value: "Live-in" },
		{ name: "Visa status", value: "" },
		{ name: "Available from", value: "26/01/2025" },
		{ name: "Year of experience", value: "" },
		{
			name: "Experience with kids", value: [
				"Newborn (below 1 year old)", "Toddler (1-3 years)",
				"Pre-school kids (4-5 years)", "Older kids 6 (+ years)"
			]
		},
	]

	return (
		<>
			<DashboardHeader title={t.dashboard.profile} />
			<div className="flex justify-center">
				<div className="flex flex-wrap text-gray-900 items-start justify-start md:px-10 px-4 py-7 gap-4">
					<div className="pb-7 card w-full lg:w-[309px] mt-9 px-2.5">
						<GeneralInformation />
						<div className="mt-7 card">
							<p className="text-sm font-medium">{t.dashboard['Profile completion']}</p>
							<div className="mt-1 text-xs font-medium flex justify-between">
								<p><span className="text-2xl font-bold">65%</span> {t.dashboard['Complete']}</p>
								<p className="mt-3">{t.dashboard.earning} 10/20 {t.dashboard.point}</p>
							</div>
							<div className="h-2 w-full bg-gray-ea rounded-full mt-1">
								<div className="rounded-full w-1/2 bg-yellow-600 h-full"></div>
							</div>
						</div>
						<div className="mt-4 card">
							<p className="text-sm font-medium">{t.dashboard.award}</p>
							<div className="mt-1 text-xs font-medium flex justify-between items-center">
								<p className="text-lg font-bold">{t.dashboard.skill}</p>
								<Img src="/badge.svg" />
							</div>
							<Img src="/stars.svg" className="mt-3" />
						</div>
						<Identity />
						<Title title={t.documents["My Documents"]} />

						<div className="mt-4 card pt-5 p-5 pb-3">
							<div className="grid gap-5 grid-cols-3">
								{documents.map((e, i) => (
									<div className="flex flex-col max-w-16 gap-2 items-center" key={i}>
										<div className="w-16 h-16 flex items-center justify-center rounded-lg border border-gray-700">
											<Img src={e.img} />
										</div>
										<p className="font-bold text-xs text-center">{t.documents[e.name]}</p>
									</div>
								))}
							</div>
							<button className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
								<FaPlus />
								<span className="text-sm font-semibold">
									{t.documents["Add Document"]}
									<span className="text-xs font-medium">{' '}(+5 {t.dashboard["point"]})</span>
								</span>
							</button>
						</div>

					</div>
					<div className="md:w-[446px] w-full">
						<Title className="m-0" title={t.profile.about_me} />
						<div className="mt-2.5 card px-6 text-sm">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								<br />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo caliqua. Ut enim ad...
								<button className="font-semibold">Plus</button>
							</p>
						</div>
						<Title className="mt-6" title={t.dashboard.details} />
						<div className="mt-2.5 card px-6 flex flex-col gap-2 text-sm">
							{details.map((e, i) => (
								<div className="flex items-center pb-2 border-b border-gray-ea justify-between" key={i}>
									<p>{t.details[e.name]}</p>

									{Array.isArray(e.value) ? (
										<div>
											{e.value.map((f) => (
												<p className="font-semibold sm:text-base text-xs rtl:text-left ltr:text-right" key={f}>
													{t.details[f]}
												</p>
											))}
										</div>
									) : e.value ? (
										<p className="font-bold">{t.details[e.value] || e.value}</p>) : (
										<button className="w-36 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
											<Img src="/pen.svg" />
											<span className="text-sm font-semibold">
												{t.details["Add"]}
												<span className="text-xs font-medium">{' '}(+2 {t.dashboard["point"]})</span>
											</span>
										</button>
									)}
								</div>
							))}

						</div>
						<Title className="mt-6" title={t.dashboard["My Tasks"]} />
						<div className="mt-4 px-6 card">
							<div className="gap-2 flex flex-wrap">
								{capabilities.map((e, i) => (
									<div className="flex flex-col w-16 gap-2 items-center" key={i}>
										<div className="w-full h-16 flex items-center justify-center rounded-lg border border-gray-700">
											<div className="text-teal-500" dangerouslySetInnerHTML={{ __html: e.img }}></div>
										</div>
										<p className="font-bold text-xs text-center">{t.capabilities[e.name]}</p>
									</div>
								))}
							</div>
							<button className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
								<FaPlus />
								<span className="text-sm font-semibold">{t.dashboard.add}
									<span className="text-xs font-medium">{' '}(+5 ${t.dashboard.point})</span>
								</span>
							</button>

						</div>
					</div>
					<div className="w-full sm:w-[292px]">
						<Title className="m-0" title={t.dashboard["Video presentation"]} />
						<div className="mt-2.5 card p-6 flex items-center justify-center relative">
							<Img src="/nanny1.svg" className="w-full rounded-xl !h-40 object-cover" />
							<button className="absolute text-white text-3xl">
								<FaPlay />
							</button>
						</div>
						<h3 className="font-bold mt-7 text-lg">{t.dashboard["My Reviews & Rating"]}</h3>
						<Rating rating={3.5} reviewerCount={14} />
					</div>
				</div>
			</div>
		</>
	)
}
