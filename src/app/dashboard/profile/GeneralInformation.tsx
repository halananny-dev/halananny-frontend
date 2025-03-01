"use client"

import ImgUpload from "@/components/registration/ImgUpload";
import Btn from "@/components/sections/Button";
import Img from "@/components/sections/Img";
import { useI18n } from "@/i18/i18Context";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuPen } from "react-icons/lu";
import { MdStars } from "react-icons/md";

export default function GeneralInformation() {
	const [img, setImg] = useState({ image: '/nanny1.svg' })
	const { t } = useI18n()

	return (
		<>
			<div className="flex justify-center">
				<ImgUpload
					imgClass="w-full h-full rounded-18"
					className="!w-44 !h-44 -mt-20 p-1 bg-white !rounded-18 drop-shadow-avatar"
					image={img}
					setImg={setImg}
				/>
			</div>
			<h3 className="mt-4 text-3xl font-bold text-center">
				Almira A.
			</h3>
			<div className="flex gap-1 justify-center mx-auto text-xs mt-1 text-white w-32 rounded bg-gray-1 h-5 items-center">
				<Img src="/verified.svg" />
				<span>{t.dashboard.Verified}</span>
			</div>
			<p className="mt-4 text-[#979797] font-medium text-center">
				{t.dashboard.register}
				<span className="text-gray-900 font-semibold">{' '}01/02/2025</span>
			</p>
			<div className="flex flex-col items-center">
				<Link href="/dashboard/settings">
					<Btn className="bg-green-900 drop-shadow-btn !border-0 !text-sm max-w-56 mt-4 gap-2" size="lg" variant="primary">
						<FaWhatsapp />
						<span>
							{t.dashboard.contact}
						</span>
						<LuPen className="w-0.5" />
					</Btn>
				</Link>
				<Btn className="!text-base max-w-56 mt-5 h-10 gap-2 hover:bg-teal-500 hover:text-white !rounded-lg !border-0" size="lg" variant="primary">
					<MdStars />
					<span>
						{t.dashboard.badge}
					</span>
				</Btn>
			</div>
		</>
	)
}