"use client"

import ImgUpload from "@/components/registration/ImgUpload";
import Btn from "@/components/sections/Button";
import Img from "@/components/sections/Img";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { uploadFile } from "@/service/file";
import { updateUser } from "@/service/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { LuPen } from "react-icons/lu";

export default function GeneralInformation({ editable, user }) {
	const [img, setImg] = useState(user.profile_photo_url)
	const { setUser } = useAppContext()
	const { t } = useI18n()

	const { setValue, watch } = useForm({
		defaultValues: {
			"profileImg": ""
		}
	}
	)

	const profileImg = watch("profileImg")

	useEffect(() => {
		const upload = async () => {
			const imgUrl = await uploadFile(img, 'profiles')

			const newUser = await updateUser({ profile_photo_url: imgUrl, }, user.id)

			setUser(newUser)
		}

		if (profileImg) {
			upload()
		}
	}, [profileImg])

	return (
		<>
			<div className="flex justify-center">
				<ImgUpload
					editable={editable}
					imgClass="w-full h-full rounded-18"
					className="!w-44 !h-44 -mt-20 p-1 bg-white !rounded-18 drop-shadow-avatar"
					image={img}
					setImg={(file) => {
						setImg(file)
						setValue("profileImg", file);
					}}
				/>
			</div>
			<h3 className="mt-4 text-3xl font-bold text-center">
				{user.name}
			</h3>
			{user.verified_at && <div className="flex gap-1 justify-center mx-auto text-xs mt-1 text-white w-32 rounded bg-gray-1 h-5 items-center">
				<Img src="/verified.svg" />
				<span>{t.dashboard.Verified}</span>
			</div>}
			<p className="mt-4 text-[#979797] font-medium text-center">
				{t.dashboard.register}
				<span className="text-gray-900 font-semibold">{' '}{new Date(user.created_at).toLocaleDateString()}</span>
			</p>
			<div className="flex flex-col items-center">
				<Link
					target={editable ? "_self" : "_blank"}
					href={editable ? "/dashboard/settings" : `https://wa.me/${user.phone_number}`}>
					<Btn className="bg-green-900 drop-shadow-btn !border-0 !text-sm w-56 mt-4 gap-2" size="lg" variant="primary">
						<FaWhatsapp />
						<span>
							{t.dashboard.contact}
						</span>
						{editable && <LuPen className="w-0.5" />}
					</Btn>
				</Link>
				{/* <Btn className="!text-base w-56 mt-5 h-10 gap-2 hover:bg-teal-500 hover:text-white !rounded-lg !border-0" size="lg" variant="primary">
					<MdStars />
					<span>
						{t.dashboard.badge}
					</span>
				</Btn> */}
			</div >
		</>
	)
}