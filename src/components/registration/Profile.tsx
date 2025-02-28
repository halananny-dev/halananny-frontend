"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { MARTIAL_STATUS, NATIONALITIES, RELIGIONS, screenVariants, VISA_STATUS } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Counter from "../sections/Counter";
import CustomSelect from "../sections/CustomSelect";
import Img from "../sections/Img";
import Title from "../sections/Title";
import { DatePicker } from "../ui/datepicker";
import VideoUpload from "./FileUpload";
import ImgUpload from "./ImgUpload";

const Profile = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [img, setImg] = useState(null)
	const [kids, setKids] = useState(0)

	const handleSubmit = (e) => {
		e.preventDefault();

		if (img) {
			setActiveTab(3)
		}
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 px-4 py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-48">{t.profile.title}</Title>
				<form onSubmit={handleSubmit} className="grow text-gray-900">
					<h4 className="font-bold">{t.profile.profile_picture}</h4>
					<p className="text-sm mt-1">{t.profile.profile_picture_desc}</p>
					<ImgUpload
						image={img}
						setImg={setImg}
					/>
					<h4 className="font-bold mt-8">{t.profile.video_upload}</h4>
					<p className="text-sm mt-1">{t.profile.video_upload_desc}</p>
					<p className="mt-4 text-teal-500 font-semibold text-xs">{t.profile.video_guidelines}</p>
					<div className="mt-3 font-medium w-full text-[10px] grid md:grid-cols-4 sm:grid-cols-2 gap-2.5 sm:w-fit rounded-lg p-2.5 bg-gray-650 border border-teal-500">
						<div className="flex gap-1.5 items-center">
							<Img src="/triumph.svg" />
							<span>{t.profile.guideline_1}</span>
						</div>
						<div className="flex gap-1.5 items-center">
							<Img src="/mic.svg" />
							<span>{t.profile.guideline_2}</span>
						</div>
						<div className="flex gap-1.5 items-center">
							<Img src="/smile.svg" />
							<span>{t.profile.guideline_3}</span>
						</div>
						<div className="flex gap-1.5 items-center">
							<Img src="/video.svg" />
							<span>{t.profile.guideline_4}</span>
						</div>
					</div>
					<VideoUpload />

					<div className="flex sm:pl-5 gap-2 text-xs mt-6 font-semibold text-teal-500 items-center">
						<CheckBox name="consent" />
						<label htmlFor="consent">{t.profile.consent}</label>
					</div>

					<div className="mt-8 flex flex-col gap-2 font-semibold">
						<label htmlFor="about">{t.profile.about_me}</label>
						<textarea
							className="textarea"
							placeholder={t.profile.about_me_placeholder}
							id="about"
							name="about"></textarea>
					</div>

					<div className="mt-5 font-semibold flex flex-col gap-5 max-w-96">
						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.nationality}</label>
							<CustomSelect
								options={NATIONALITIES}
								groupName="nationalities"
								placeholder={t.profile.nationality}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.religion}</label>
							<CustomSelect
								options={RELIGIONS}
								groupName="religions"
								placeholder={t.profile.religion}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.visa_status}</label>
							<CustomSelect
								groupName="visa-status"
								options={VISA_STATUS}
								placeholder={t.profile.visa_status} />
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.age}</label>
							<DatePicker />
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.marital_status}</label>
							<CustomSelect
								groupName="marital-status"
								options={MARTIAL_STATUS}
								placeholder={t.profile.marital_status}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.number_of_kids}</label>
							<Counter setValue={setKids} value={kids} />
						</div>
					</div>

					<Btn
						type="submit"
						className="mt-12 lg:max-w-540" variant="primary" size="lg" disabled={!img}>
						{t.profile.next_step}
					</Btn>
				</form>
			</div>
		</motion.div>
	);
};

export default Profile;
