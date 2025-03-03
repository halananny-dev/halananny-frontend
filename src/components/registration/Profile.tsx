"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { uploadFile } from "@/service/file";
import { updateUser } from "@/service/user";
import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MARTIAL_STATUS, RELIGIONS, screenVariants, VISA_STATUS } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Counter from "../sections/Counter";
import CustomSelect from "../sections/CustomSelect";
import Loader from "../sections/Loader";
import Title from "../sections/Title";
import { DatePicker } from "../ui/datepicker";
import VideoUpload from "./FileUpload";
import ImgUpload from "./ImgUpload";

interface FormData {
	profileImg: File | null;
	aboutMe: string;
	nationality: string;
	religion: string;
	visaStatus: string;
	age: string;
	maritalStatus: string;
	numberOfKids: number;
	video: File | null;
	consent: boolean;
}

const Profile = ({ setActiveTab }: { setActiveTab: (tab: number) => void }) => {
	const { t } = useI18n();
	const { countries, userId } = useAppContext()
	const [img, setImg] = useState<File | null>(null);
	const [kids, setKids] = useState(0);
	const [loading, setLoading] = useState(false)

	const {
		handleSubmit,
		register,
		setValue,
		control
	} = useForm<FormData>({
		defaultValues: {
			profileImg: null,
			aboutMe: "",
			nationality: "",
			religion: "",
			visaStatus: "",
			video: null,
			age: "",
			maritalStatus: "",
			numberOfKids: 0,
			consent: false,
		},
	});

	const onSubmit = async (data: FormData) => {
		setLoading(true)
		const imgUrl = await uploadFile(img, 'profiles')

		const payload = {
			profile_photo_url: imgUrl,
			number_of_kids: data.numberOfKids,
			marital_status: data.maritalStatus,
			date_of_birth: data.age,
			visa_status: data.visaStatus,
			religion: data.religion,
			nationality_id: countries.find(e => e.nationality === data.nationality)?.id || null,
			about: data.aboutMe,
			user_video_consent: data.consent
		}

		await updateUser(payload, userId)
		setActiveTab(3);
		setLoading(false)
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 px-4 py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-48">{t.profile.title}</Title>
				<form onSubmit={handleSubmit(onSubmit)} className="grow text-gray-900">
					<h4 className="font-bold">{t.profile.profile_picture}</h4>
					<p className="text-sm mt-1">{t.profile.profile_picture_desc}</p>
					<ImgUpload image={img} setImg={(file) => {
						setImg(file)
						setValue("profileImg", file);
					}} />

					<h4 className="font-bold mt-8">{t.profile.video_upload}</h4>
					<p className="text-sm mt-1">{t.profile.video_upload_desc}</p>
					<Controller
						name="video"
						control={control}
						render={({ field }) => (
							<VideoUpload value={field.value} onChange={field.onChange} />
						)}
					/>

					<div className="flex sm:pl-5 gap-2 text-xs mt-6 font-semibold text-teal-500 items-center">
						<CheckBox {...register("consent")} />
						<label htmlFor="consent">{t.profile.consent}</label>
					</div>

					<div className="mt-8 flex flex-col gap-2 font-semibold">
						<label htmlFor="about">{t.profile.about_me}</label>
						<textarea
							className="textarea"
							placeholder={t.profile.about_me_placeholder}
							{...register("aboutMe")}
						></textarea>
					</div>

					<div className="mt-5 font-semibold flex flex-col gap-5 max-w-96">
						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.nationality}</label>
							<CustomSelect
								options={countries?.map(e => e.nationality)}
								groupName="nationalities"
								placeholder={t.profile.nationality}
								onChange={(value: any) => setValue("nationality", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.religion}</label>
							<CustomSelect
								options={RELIGIONS}
								groupName="religions"
								placeholder={t.profile.religion}
								onChange={(value: any) => setValue("religion", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.visa_status}</label>
							<CustomSelect
								groupName="visa-status"
								options={VISA_STATUS}
								placeholder={t.profile.visa_status}
								onChange={(value: any) => setValue("visaStatus", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>
								{t.profile.age}
							</label>
							<DatePicker
								onChange={(value) => setValue("age", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>
								{t.profile.marital_status}
							</label>
							<CustomSelect
								groupName="marital-status"
								options={MARTIAL_STATUS}
								placeholder={t.profile.marital_status}
								onChange={(value: any) => setValue("maritalStatus", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>
								{t.profile.number_of_kids}
							</label>
							<Counter
								value={kids}
								setValue={(value) => {
									setValue("numberOfKids", value)
									setKids(value)
								}}
							/>
						</div>
					</div>

					<Btn
						type="submit"
						className="mt-12 lg:max-w-540"
						variant="primary"
						size="lg"
						disabled={!img || loading}
					>
						{t.profile.next_step}
						{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
					</Btn>
				</form>
			</div>
		</motion.div>
	);
};

export default Profile;
