"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import CustomSelect from "../sections/CustomSelect";
import MultiSelect from "../sections/MultiSelect";
import Title from "../sections/Title";
import { DatePicker } from "../ui/datepicker";

const JobPreference = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [jobs, setJobs] = useState<string[]>([]);
	const [country, setCountry] = useState<string | undefined>();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (jobs.length > 0) {
			setActiveTab(5);
		}
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-56">{t.jobPreference.title}</Title>
				<form onSubmit={handleSubmit} className="grow w-full text-gray-900">
					<div className="max-w-390 mx-auto lg:mx-0">
						<h4 className="font-bold">{t.jobPreference.desired_jobs}</h4>
						<MultiSelect
							onChange={(e) => setJobs(e as string[])}
							options={['full_time', 'part_time', 'live_in']}
							placeholder={t.jobPreference.job_list_placeholder}
							className="mt-2"
						/>

						<h4 className="font-bold mt-6">{t.jobPreference.desired_salary}</h4>
						<div className="flex gap gap-3 mt-3">
							<CustomSelect
								options={['AED', 'USD']}
								placeholder={t.jobPreference.currency_placeholder}
								className="w-24 text-sm"
							/>
							<CustomSelect
								options={['1000 to 2000', '2000 to 4000']}
								placeholder={t.jobPreference.salary_range_placeholder}
							/>
						</div>

						<h4 className="font-bold mt-8">{t.jobPreference.available_country}</h4>
						<MultiSelect
							onChange={(e) => setCountry((e as string[])[0])}
							options={['UAE']}
							placeholder={t.jobPreference.country_placeholder}
							className="mt-2"
						/>

						{country && (
							<>
								<h4 className="font-bold mt-6">{t.jobPreference.available_cities}</h4>
								<MultiSelect
									onChange={(e) => setCountry((e as string[])[0])}
									options={['Dubai']}
									placeholder={t.jobPreference.cities_placeholder}
									className="mt-2"
								/>
							</>
						)}

						<h4 className="font-bold mt-8 mb-4">{t.jobPreference.available_from}</h4>
						<DatePicker />
					</div>

					<div className="mt-5 flex gap-6">
						<Btn
							type="button"
							onClick={() => setActiveTab(3)}
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
							disabled={jobs.length === 0}
						>
							{t.experience.next_step}
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default JobPreference;
