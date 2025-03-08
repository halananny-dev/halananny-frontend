import Img from "@/components/sections/Img"
import Loader from "@/components/sections/Loader"
import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { FaPlay, FaPlus } from "react-icons/fa"
import About from "./About"
import Completion from "./Completion"
import Details from "./Details"
import Documents from "./Documents"
import GeneralInformation from "./GeneralInformation"
import Identity from "./Identity"
import Rating from "./Rating"
import Tasks from "./Tasks"
import Title from "./Title"

export const Profile = ({ editable = true, user }) => {
	const { t } = useI18n()
	const { user: admin } = useAppContext()

	return <div className="flex justify-center">
		{!user ? <Loader className="py-20" /> :
			<div className="flex flex-wrap text-gray-900 items-start justify-start md:px-10 px-4 py-7 gap-4">
				<div className="pb-7 card w-full lg:w-[309px] mt-9 px-2.5">
					<GeneralInformation user={user} editable={editable} />
					<Completion />
					{/* <Awards /> */}
					<Identity editable={editable} />
					<Documents editable={editable} />
				</div>
				<div className="md:w-[446px] w-full">
					<About editable={editable} />
					<Details editable={editable} />
					<Tasks editable={editable} />
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
						admin={admin}
						editable={editable}
					/>
				</div>
			</div>
		}
	</div >
}