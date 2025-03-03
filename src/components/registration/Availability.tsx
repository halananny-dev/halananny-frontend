"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { updateUser } from "@/service/user";
import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { AVAILABILITY, BOOKING_DURATIONS, screenVariants } from "../constants";
import Btn from "../sections/Button";
import Loader from "../sections/Loader";
import Title from "../sections/Title";
import { Calendar } from "../ui/calendar";
import { default as CustomRadio } from "./Radio";

const Availability = ({ setActiveTab }) => {
	const { t } = useI18n();
	const { userId } = useAppContext()
	const [loading, setLoading] = useState(false)

	const { handleSubmit, setValue, watch, control } = useForm({
		defaultValues: {
			preferred_start_date: undefined,
			preferred_service_frequency: AVAILABILITY[0],
			booking_duration: BOOKING_DURATIONS[0],
		},
	});

	const date = watch("preferred_start_date");

	const onSubmit = async (data) => {
		setLoading(true)

		await updateUser(data, userId)

		setActiveTab(5);

		setLoading(false)
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-52 !items-start" typographyClass="md:!text-3xl">
					{t.desired_job.title}
				</Title>

				<form onSubmit={handleSubmit(onSubmit)} className="grow text-gray-900">
					<h4 className="font-bold mb-5">{t.desired_job.preferred_start_date}</h4>
					<Calendar
						mode="single"
						selected={date}
						onSelect={(e: any) => setValue("preferred_start_date", e)}
						className="mt-5"
					/>

					<h4 className="mt-12 font-bold">{t.desired_job.frequency_of_service}</h4>
					<div className="mt-7 flex flex-wrap gap-4">
						{AVAILABILITY.map((e, i) => (
							<label key={i} htmlFor={e} className="flex items-center gap-2">
								<Controller
									name="preferred_service_frequency"
									control={control}
									render={({ field }) => (
										<CustomRadio
											{...field}
											id={e}
											value={e}
											checked={field.value === e}
											onChange={() => setValue("preferred_service_frequency", e)}
										/>
									)}
								/>
								<span className="font-medium">{t.availability[e]}</span>
							</label>
						))}
					</div>

					<h4 className="mt-10 font-bold">{t.desired_job.booking_duration}</h4>
					<div className="mt-5 flex flex-col gap-3">
						{BOOKING_DURATIONS.map((b, i) => (
							<div key={i} className="flex items-center font-medium gap-2">
								<Controller
									name="booking_duration"
									control={control}
									render={({ field }) => (
										<CustomRadio
											{...field}
											id={b}
											value={b}
											checked={field.value === b}
											onChange={() => setValue("booking_duration", b)}
										/>
									)}
								/>
								<label htmlFor={b}>{t["booking-duration"][b]}</label>
							</div>
						))}
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
							<Btn type="submit" disabled={loading} variant="primary" size="lg">
								{t.profile.next_step}
								{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
							</Btn>
						</div>
						<Btn
							type="button"
							className="mt-6 flex bg-teal-400 items-center gap-3 border-none text-gray-900 disabled:text-gray-70 disabled:bg-gray-60"
							variant="primary"
							size="md"
						>
							<span>{t.desired_job.ready}</span>
							<FaCheckCircle />
						</Btn>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default Availability;
