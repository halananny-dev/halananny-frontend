"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { AVAILABILITY, CITIES, COUNTRIES, CURRENCIES, PRICE_RANGE, screenVariants } from "../constants";
import Btn from "../sections/Button";
import CustomSelect from "../sections/CustomSelect";
import MultiSelect from "../sections/MultiSelect";
import Title from "../sections/Title";
import { DatePicker } from "../ui/datepicker";

const JobPreference = ({ setActiveTab }) => {
	const { t } = useI18n();

	const { control, handleSubmit, watch } = useForm({
		defaultValues: {
			jobs: [],
			country: "",
			city: [],
			currency: "",
			salary: "",
			availableFrom: null,
		},
	});

	const jobs = watch("jobs");
	const country = watch("country");

	const onSubmit = (data) => {
		if (data.jobs.length > 0) {
			console.log("Form Data:", data);
			setActiveTab(5);
		}
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-56">{t.jobPreference.title}</Title>

				<form onSubmit={handleSubmit(onSubmit)} className="grow w-full text-gray-900">
					<div className="max-w-390 mx-auto lg:mx-0">
						<h4 className="font-bold">{t.jobPreference.desired_jobs}</h4>
						<Controller
							name="jobs"
							control={control}
							render={({ field }) => (
								<MultiSelect
									{...field}
									groupName="availability"
									options={AVAILABILITY}
									placeholder={t.jobPreference.job_list_placeholder}
									className="mt-2"
								/>
							)}
						/>

						<h4 className="font-bold mt-6">{t.jobPreference.desired_salary}</h4>
						<div className="flex gap-3 mt-3">
							<Controller
								name="currency"
								control={control}
								render={({ field }) => (
									<CustomSelect
										{...field}
										options={CURRENCIES}
										groupName="currencies"
										placeholder={t.jobPreference.currency_placeholder}
										className="w-24 text-sm"
									/>
								)}
							/>
							<Controller
								name="salary"
								control={control}
								render={({ field }) => (
									<CustomSelect
										{...field}
										groupName="price-range"
										options={PRICE_RANGE}
										placeholder={t.jobPreference.salary_range_placeholder}
									/>
								)}
							/>
						</div>

						<h4 className="font-bold mt-8">{t.jobPreference.available_country}</h4>
						<Controller
							name="country"
							control={control}
							render={({ field }) => (
								<MultiSelect
									{...field}
									groupName="countries"
									options={COUNTRIES.map(e => e.name)}
									placeholder={t.jobPreference.country_placeholder}
									className="mt-2"
								/>
							)}
						/>

						{country && (
							<>
								<h4 className="font-bold mt-6">{t.jobPreference.available_cities}</h4>
								<Controller
									name="city"
									control={control}
									render={({ field }) => (
										<MultiSelect
											{...field}
											groupName="cities"
											options={CITIES}
											placeholder={t.jobPreference.cities_placeholder}
											className="mt-2"
										/>
									)}
								/>
							</>
						)}

						<h4 className="font-bold mt-8 mb-4">{t.jobPreference.available_from}</h4>
						<Controller
							name="availableFrom"
							control={control}
							render={({ field }) => <DatePicker {...field} />}
						/>
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
