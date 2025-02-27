"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AVAILABILITY, screenVariants } from "../constants";
import Btn from "../sections/Button";
import Title from "../sections/Title";
import { Calendar } from "../ui/calendar";
import { default as CustomRadio, default as Radio } from "./Radio";

const Availability = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [date, setDate] = useState<any>()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (date) {
			setActiveTab(5);
		}
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-52 !items-start" typographyClass="md:!text-3xl">
					{t.availability.title}
				</Title>
				<form onSubmit={handleSubmit} className="grow text-gray-900">
					<h4 className="font-bold mb-5">{t.availability.preferred_start_date}</h4>
					<Calendar mode="single" selected={date} onSelect={(e) => {
						setDate(e)
					}} className="mt-5" />

					<h4 className="mt-12 font-bold">{t.availability.frequency_of_service}</h4>
					<div className="mt-7 flex flex-wrap gap-4">
						{AVAILABILITY.map((e, i) => (
							<label key={i} htmlFor={e} className="flex items-center gap-2">
								<Radio id={e} name="frequency" checked={i === 0} value={e} />
								<span className="font-medium">{t[e]}</span>
							</label>
						))}
					</div>

					<h4 className="mt-10 font-bold">{t.availability.booking_duration}</h4>
					<div className="mt-5 flex flex-col gap-3">
						<div className="flex items-center font-medium gap-2">
							<CustomRadio name="religion" id="muslim" checked value="muslim" />
							<label htmlFor="muslim">{t.availability.limited_period}</label>
						</div>
						<div className="flex items-center font-medium gap-2">
							<CustomRadio name="religion" id="dietary" value="dietary" />
							<label htmlFor="dietary">{t.availability.unlimited_period}</label>
						</div>
					</div>

					<div className="md:max-w-md">
						<div className="mt-18 flex gap-6">
							<Btn
								type="button"
								onClick={() => setActiveTab(2)}
								className="w-32"
								variant="primary-outlined"
								size="lg"
							>
								{t.experience.back}
							</Btn>
							<Btn type="submit" variant="primary" size="lg" disabled={!date}>
								{t.profile.next_step}
							</Btn>
						</div>
						<Btn
							type="button"
							className="mt-6 flex bg-teal-400 items-center gap-3 border-none text-gray-900 disabled:text-gray-70 disabled:bg-gray-60"
							variant="primary"
							size="md"
							disabled={!date}
						>
							<span>{t.availability.ready}</span>
							<FaCheckCircle />
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default Availability;
