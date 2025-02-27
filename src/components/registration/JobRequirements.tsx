"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CAPABILITIES, screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Title from "../sections/Title";
import Checkbox from "./Checkbox";
import CustomRadio from "./Radio";

const JobRequirements = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [disabled, setDisabled] = useState(true)
	const formRef = useRef<any>(null)
	const [skills, setSkills] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!disabled) {
			setActiveTab(4);
		}
	};


	const handleChange = () => {
		const form: any = new FormData(formRef.current);

		const experience: any = []
		const language: any = []
		let religion: any = ''


		for (let [key, value] of form.entries()) {
			if (["newborn", "preschool", "older"].includes(key)) {
				experience.push(key);
			} else if (["en", "ar"].includes(key)) {
				language.push(key);
			} else {
				religion = value;
			}
		}

		setDisabled(experience.length === 0 || language.length === 0 || !religion || skills.length === 0);
	};

	useEffect(() => {
		handleChange();
	}, [skills]);

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-52 !items-start" typographyClass="md:text-3xl">
					{t.jobRequirements.title}
				</Title>
				<form
					ref={formRef}
					onChange={handleChange}
					onSubmit={handleSubmit} className="grow text-gray-900">
					<h4 className="font-bold mb-5">{t.jobRequirements.experience}</h4>
					<div className="mt-4 flex flex-col gap-2">
						<label htmlFor="newborn" className="flex items-center gap-2.5">
							<CheckBox name="newborn" />
							<span className="font-medium">{t.jobRequirements.newborn}</span>
						</label>
						<label htmlFor="preschool" className="flex items-center gap-2.5">
							<CheckBox name="preschool" />
							<span className="font-medium">{t.jobRequirements.preschool}</span>
						</label>
						<label htmlFor="older" className="flex items-center gap-2.5">
							<CheckBox name="older" />
							<span className="font-medium">{t.jobRequirements.older}</span>
						</label>
					</div>

					<h4 className="mt-11 font-bold">{t.jobRequirements.language}</h4>
					<div className="mt-5 flex gap-5">
						<label htmlFor="en" className="flex items-center gap-2.5">
							<CheckBox name="en" />
							<span className="font-medium">{t.experience.english}</span>
						</label>
						<label htmlFor="ar" className="flex items-center gap-2.5">
							<CheckBox name="ar" />
							<span className="font-medium">{t.experience.arabic}</span>
						</label>
					</div>

					<h4 className="mt-10 font-bold">{t.jobRequirements.skills}</h4>
					<Checkbox onChange={updatedSkills => setSkills(updatedSkills)} variant="variant2" className="mt-5" data={CAPABILITIES} />
					<h4 className="mt-10 font-bold">{t.jobRequirements.religion}</h4>
					<div className="mt-5 flex flex-col gap-3">
						<div className="flex items-center font-medium gap-2">
							<CustomRadio name="religion" id="muslim" checked value="muslim" />
							<label htmlFor="muslim">{t.jobRequirements.muslim}</label>
						</div>
						<div className="flex items-center font-medium gap-2">
							<CustomRadio name="religion" id="dietary" value="dietary" />
							<label htmlFor="dietary">{t.jobRequirements.dietary}</label>
						</div>
					</div>

					<div className="mt-14 flex gap-6">
						<Btn
							type="button"
							onClick={() => setActiveTab(2)}
							className="w-32"
							variant="primary-outlined"
							size="lg"
						>
							{t.experience.back}
						</Btn>
						<Btn
							type="submit"
							className="lg:max-w-80"
							variant="primary"
							size="lg"
							disabled={disabled}
						>
							{t.experience.next_step}
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default JobRequirements;
