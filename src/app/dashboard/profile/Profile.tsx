import Img from "@/components/sections/Img"
import Loader from "@/components/sections/Loader"
import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { getProfile, getTable } from "@/service/user"
import { useEffect, useState } from "react"
import { FaPlay, FaPlus } from "react-icons/fa"
import GeneralInformation from "./GeneralInformation"
import Identity from "./Identity"
import Rating from "./Rating"
import Title from "./Title"

export const Profile = ({ editable = true, userId }) => {
	const { t } = useI18n()
	const { user: admin } = useAppContext()
	const [user, setUser] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [documents, setDocuments] = useState<any>([])
	const [details, setDetails] = useState<any>([])
	const [reviews, setReviews] = useState<any>([])

	useEffect(() => {
		const init = async () => {
			const user = await getProfile(userId)

			setUser(user)

			const documents = await getTable(userId, 'documents')

			setDocuments(documents)

			const reviews = await getTable(userId, 'ratings')

			setReviews(reviews)


			setDetails([
				{ name: "City availble to work", value: user.available_city && user.available_city[0] || '' },
				{ name: "Desired monthly salary(AED)", value: user.desired_salary },
				{ name: "Languages", value: user.language?.join(', ') },
				{ name: "Desired job", value: user.availability },
				{ name: "Visa status", value: user.visa_status },
				{ name: "Available from", value: user.available_from ? new Date(user.available_from).toLocaleDateString() : '' },
				{ name: "Year of experience", value: user.years_of_experience },
				{
					name: "Experience with kids", value: user.experience_with_kids
				},
			])


			setLoading(false)
		}


		init()
	}, [])

	return <div className="flex justify-center">
		{loading ? <Loader className="py-20" /> :
			<div className="flex flex-wrap text-gray-900 items-start justify-start md:px-10 px-4 py-7 gap-4">
				<div className="pb-7 card w-full lg:w-[309px] mt-9 px-2.5">
					<GeneralInformation user={user} editable={editable} />
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
					<Identity user={user} editable={editable} />
					<Title editable={editable} title={t.documents["My Documents"]} />

					<div className="mt-4 card pt-5 p-5 pb-3">
						{documents.length !== 0 ?
							<div className="grid gap-5 grid-cols-3">
								{documents.map((e: any, i) => (
									<div className="flex flex-col max-w-16 gap-2 items-center" key={i}>
										<div className="w-16 h-16 flex items-center justify-center rounded-lg border border-gray-700">
											<Img src="/id.svg" />
										</div>
										<p className="font-bold text-xs text-center">{t.documents[e.name]}</p>
									</div>))}
							</div> : <p className="text-center text-sm pb-2">{t['There is no documents yet ):']}</p>}
						{editable && <button className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
							<FaPlus />
							<span className="text-sm font-semibold">
								{t.documents["Add Document"]}
								<span className="text-xs font-medium">{' '}(+5 {t.dashboard["point"]})</span>
							</span>
						</button>}
					</div>

				</div>
				<div className="md:w-[446px] w-full">
					<Title editable={editable} className="m-0" title={t.profile.about_me} />
					<div className="mt-2.5 card px-6 text-sm">
						{user.about?.length > 470 ? <>
							{user.about.slice(0, 470)}
							<button className="font-semibold">{t.profile.Plus}</button>
						</> : user.about}

						{!user.about && (editable ? <textarea className="outline-none w-full" placeholder={t.profile.about_me} /> : <p>{t['Nothing provided yet']}</p>)}
					</div>
					<Title editable={editable} className="mt-6" title={t.dashboard.details} />
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
									editable ? <button className="w-36 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
										<Img src="/pen.svg" />
										<span className="text-sm font-semibold">
											{t.details["Add"]}
											<span className="text-xs font-medium">{' '}(+2 {t.dashboard["point"]})</span>
										</span>
									</button> : '-'
								)}
							</div>
						))}

					</div>
					<Title editable={editable} className="mt-6" title={t.dashboard["My Tasks"]} />
					<div className="mt-4 px-6 card">
						<div className="gap-2 flex flex-wrap">
							{Array.isArray(user.capabilities) && user.capabilities.length !== 0 ? user.capabilities.map((e, i) => (
								<div className="flex flex-col w-16 gap-2 items-center" key={i}>
									<div className="w-full h-16 flex items-center justify-center rounded-lg border border-gray-700">
										<div className="text-teal-500" dangerouslySetInnerHTML={{ __html: e.img }}></div>
									</div>
									<p className="font-bold text-xs text-center">{t.capabilities[e.name]}</p>
								</div>
							)) : <p className="text-center w-full text-sm">There is no task yet ):</p>}
						</div>
						{editable && <button className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
							<FaPlus />
							<span className="text-sm font-semibold">{t.dashboard.add}
								<span className="text-xs font-medium">{' '}(+5 ${t.dashboard.point})</span>
							</span>
						</button>}
					</div>
				</div>
				<div className="w-full sm:w-[292px]">
					<Title className="m-0" title={t.dashboard["Video presentation"]} />
					<div className="mt-2.5 card p-6 flex items-center justify-center relative">
						{user.video ? <>	<Img src="/nanny1.svg" className="w-full rounded-xl !h-40 object-cover" />
							<button className="absolute text-white text-3xl">
								<FaPlay />
							</button>
						</> : editable ? <button className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
							<FaPlus />
							<span className="text-sm font-semibold">{t.details.Add}
								<span className="text-xs font-medium">{' '}(+5 ${t.dashboard.point})</span>
							</span>
						</button> : t['Nothing provided yet']
						}
					</div>
					<h3 className="font-bold mt-7 text-lg">{t.dashboard["My Reviews & Rating"]}</h3>
					<Rating
						reviews={reviews}
						admin={admin}
						editable={editable}
					/>
				</div>
			</div>}
	</div>
}