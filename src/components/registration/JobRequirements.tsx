"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { updateUser } from "@/service/user";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LANGUAGES, RELIGIONS, screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Loader from "../sections/Loader";
import Title from "../sections/Title";
import Checkbox from "./Checkbox";
import CustomRadio from "./Radio";

const JobRequirements = ({ setActiveTab }) => {
	const { t } = useI18n();
	const { experienceWithKids, capabilities, userId } = useAppContext()
	const [loading, setLoading] = useState(false)

	const { control, watch, handleSubmit, setValue, register } = useForm({
		defaultValues: {
			experience: [],
			language: [],
			religion: RELIGIONS[0],
			skills: [],
		},
	});

	const watchedValues = watch();
	const { experience, language, religion, skills } = watchedValues;

	const [disabled, setDisabled] = useState(true);
	useEffect(() => {
		setDisabled(experience.length === 0 || language.length === 0 || !religion || skills.length === 0);
	}, [experience, language, religion, skills]);

	const onSubmit = async (data) => {
		setLoading(true)

		const payload = {
			preferred_experience: data.experience.map(e => experienceWithKids.map(f => f.title === e)?.id),
			language: data.language,
			preferred_skills: data.skills.map(e => capabilities.find(f => f.name === e)?.id),
			preferred_religion: data.religion
		}

		await updateUser(payload, userId)
		setActiveTab(4);
		setLoading(false)
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-60 !items-start" typographyClass="md:!text-3xl">
					{t.jobRequirements.title}
				</Title>

				<form onSubmit={handleSubmit(onSubmit)} className="grow text-gray-900">
					<h4 className="font-bold mb-5">{t.jobRequirements.experience}</h4>
					<div className="mt-4 flex flex-col gap-2">
						{experienceWithKids.map((e, index) => (
							<label key={index} htmlFor={e.title} className="flex items-center gap-2.5">
								<CheckBox
									id={e.title}
									value={e.title}
									{...register("experience")} />
								<span className="font-medium">{t["experience-with-kids"][e.title]}</span>
							</label>
						))}
					</div>

					<h4 className="mt-11 font-bold">{t.jobRequirements.language}</h4>
					<div className="mt-5 flex gap-5">
						{LANGUAGES.map((lang, index) => (
							<label key={index} htmlFor={lang} className="flex items-center gap-2.5">
								<CheckBox id={lang} {...register("language")} value={lang} />
								<span className="font-medium">{t.languages[lang]}</span>
							</label>
						))}
					</div>

					<h4 className="mt-10 font-bold">{t.jobRequirements.skills}</h4>
					<Checkbox
						name="skills"
						control={control}
						groupName="capabilities"
						variant="variant2"
						className="mt-5"
						data={capabilities}
					/>

					<h4 className="mt-10 font-bold">{t.jobRequirements.religion}</h4>
					<div className="mt-5 flex flex-col gap-3">
						{RELIGIONS.map((c, i) => (
							<label key={i} className="flex items-center gap-2.5">
								<Controller
									name="religion"
									control={control}
									render={({ field }) => (
										<CustomRadio
											{...field}
											id={c}
											value={c}
											checked={field.value === c}
											onChange={() => setValue("religion", c)}
										/>
									)}
								/>
								<span>{t["religions"][c]}</span>
							</label>
						))}
					</div>

					<div className="mt-14 flex gap-6">
						<Btn type="button" onClick={() => setActiveTab(2)} className="w-32" variant="primary-outlined" size="lg">
							{t.experience.back}
						</Btn>
						<Btn type="submit" className="lg:max-w-80" variant="primary" size="lg" disabled={disabled || loading}>
							{t.experience.next_step}
							{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default JobRequirements;
