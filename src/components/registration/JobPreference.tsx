"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { updateUser } from "@/service/user";
import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AVAILABILITY, CURRENCIES, PRICE_RANGE, screenVariants } from "../constants";
import Btn from "../sections/Button";
import CustomSelect from "../sections/CustomSelect";
import Loader from "../sections/Loader";
import MultiSelect from "../sections/MultiSelect";
import Title from "../sections/Title";
import { DatePicker } from "../ui/datepicker";

const JobPreference = ({ setActiveTab }) => {
	const { t } = useI18n();
	const { countries, cities, userId } = useAppContext()
	const [loading, setLoading] = useState(false)

	const { control, handleSubmit, watch } = useForm({
		defaultValues: {
			availability: [],
			country: "",
			city: [],
			currency: "",
			desired_salary: "",
			available_from: null,
		},
	});

	const availability = watch("availability");
	const country = watch("country");

	const onSubmit = async (data) => {
		setLoading(true)
		const payload = {
			country_id: countries.find(e => e.country_name === data.country)?.id || null,
			available_city: data.city?.map(e => cities.find(f => f.name === e)?.id) || null,
			availability: data.availability,
			desired_salary: data.desired_salary,
			available_from: data.available_from,
		}

		await updateUser(payload, userId)
		setActiveTab(5);
		setLoading(false)
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-56">{t.jobPreference.title}</Title>

				<form onSubmit={handleSubmit(onSubmit)} className="grow w-full text-gray-900">
					<div className="max-w-390 mx-auto lg:mx-0">
						<h4 className="font-bold">{t.jobPreference.desired_jobs}</h4>
						<Controller
							name="availability"
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
								name="desired_salary"
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
								<CustomSelect
									{...field}
									groupName="countries"
									options={countries.map(e => e.country_name)}
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
											options={cities
												.filter(e => e.country_id === countries
													.find(f => f.country_name === country).id
												)
												.map(e => e.name)}
											placeholder={t.jobPreference.cities_placeholder}
											className="mt-2"
										/>
									)}
								/>
							</>
						)}

						<h4 className="font-bold mt-8 mb-4">{t.jobPreference.available_from}</h4>
						<Controller
							name="available_from"
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
							disabled={availability.length === 0 || loading}
						>
							{t.experience.next_step}
							{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default JobPreference;
