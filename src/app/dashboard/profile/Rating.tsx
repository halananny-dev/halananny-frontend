"use client"

import { useI18n } from "@/i18/i18Context";
import { FaPen } from "react-icons/fa";

interface Props {
	editable: boolean
	admin: any,
	reviews: any
}

const Rating: React.FC<Props> = ({ editable, admin, reviews }) => {
	const { t } = useI18n()

	const rating = reviews.reduce((sum, e) => sum + e.score, 0) / reviews.length || 0;

	return (
		<div className="mt-2.5 card py-6 px-7">
			<div className="flex items-center gap-3">
				<div>
					<p className="font-bold text-2xl">{rating}</p>
					<p className="text-10">{reviews.length} {t.dashboard["Ratings"]}</p>
				</div>
				<div className="flex gap-2">
					{Array(5).fill("").map((_, i) => (
						<svg key={i}
							width="24"
							height="22"
							viewBox="0 0 24 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M5.20067 21.7494L7.07798 13.7057L0.835938 8.29788L9.05824 7.58631L12.2784 -0.00012207L15.4986 7.5848L23.7194 8.29636L17.4774 13.7042L19.3562 21.7479L12.2784 17.4785L5.20067 21.7494Z"
								fill={(rating >= (i + 1)) ? "#FFAC49" : "#F4F4F4"} />
						</svg>
					))}
				</div>
			</div>

			{!editable && admin && <button className="w-full mt-5 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
				<FaPen />
				<span className="text-sm font-semibold">
					{t["Add your review"]}
				</span>
			</button>}
		</div>
	)
}

export default Rating