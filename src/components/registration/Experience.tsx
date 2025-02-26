"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { CAPABILITIES, EXPERIENCE_WITH_KIDS, screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Counter from "../sections/Counter";
import Title from "../sections/Title";
import Checkbox from "./Checkbox";

const Experience = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [experience, setExperience] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (experience) {
			setActiveTab(4);
		}
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-52">{t.experience.highlight_skills}</Title>
				<form onSubmit={handleSubmit} className="grow text-gray-900">
					<h4 className="font-bold mb-5">{t.experience.years_of_experience}</h4>
					<Counter value={experience} setValue={setExperience} />

					<h4 className="font-bold mt-10">{t.experience.experience_with_kids}</h4>
					<p className="mt-0.5 text-sm">{t.experience.check_all_apply}</p>
					<Checkbox variant="variant1" className="mt-5 " data={EXPERIENCE_WITH_KIDS} />

					<h4 className="mt-10 font-bold">{t.experience.tasks_you_can_perform}</h4>
					<Checkbox variant="variant2" className="mt-5" data={CAPABILITIES} />

					<h4 className="mt-8 font-bold">{t.experience.language_preference}</h4>
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
							disabled={experience === 0}
						>
							{t.experience.next_step}
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default Experience;
