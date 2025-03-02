"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Title from "../sections/Title";
import CertificationUpload from "./CertificationUpload";
import VideoUpload from "./FileUpload";
import CustomRadio from "./Radio";

const Verification = ({ setActiveTab }) => {
	const { t } = useI18n();

	const methods = useForm({
		defaultValues: {
			passport: null,
			visa: null,
			reference: "no",
			referenceDetails: "",
			termsAccepted: false,
			certifications: [{ name: "", file: null }],
		},
	});

	const { control, handleSubmit, watch, register } = methods;
	const referenceValue = watch("reference");

	const onSubmit = (data) => {
		console.log("Form Data Submitted:", data);
		setActiveTab(6);
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-64">{t.registration.title}</Title>

				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className="grow w-full text-gray-900">
						<div className="max-w-540 mx-auto lg:mx-0">
							<h4 className="font-bold">{t.registration.passport}</h4>
							<p className="mt-1 text-sm">{t.registration.passport_desc}</p>

							<Controller
								name="passport"
								control={control}
								rules={{ required: t.registration.passport_required }}
								render={({ field }) => (
									<VideoUpload {...field} text={t.registration.upload_passport} accept=".pdf" img="/id.svg" />
								)}
							/>

							<Controller
								name="visa"
								control={control}
								rules={{ required: t.registration.visa_required }}
								render={({ field }) => (
									<VideoUpload {...field} text={t.registration.upload_visa} accept=".pdf" img="/visa.svg" />
								)}
							/>

							<h4 className="font-bold mt-8">{t.registration.references}</h4>
							<p className="mt-1 text-sm">{t.registration.references_question}</p>

							<div className="mt-6 flex gap-6">
								<Controller
									name="reference"
									control={control}
									render={({ field }) => (
										<>
											<div className="flex items-center font-medium gap-2">
												<CustomRadio
													{...field}
													id="yes"
													value="yes"
													onChange={field.onChange}
													checked={field.value === "yes"} />
												<label htmlFor="yes">{t.registration.yes}</label>
											</div>
											<div className="flex items-center font-medium gap-2">
												<CustomRadio
													{...field}
													onChange={field.onChange}
													id="no"
													value="no"
													checked={field.value === "no"} />
												<label htmlFor="no">{t.registration.no}</label>
											</div>
										</>
									)}
								/>
							</div>

							{referenceValue === "yes" && (
								<>
									<h4 className="font-bold mt-8">{t.registration.reference_details}</h4>
									<Controller
										name="referenceDetails"
										control={control}
										rules={{
											required: referenceValue === "yes" ? t.registration.reference_required : false,
										}}
										render={({ field }) => (
											<textarea
												{...field}
												className="mt-3 textarea"
												placeholder={t.registration.reference_placeholder}
											/>
										)}
									/>
								</>
							)}

							<div className="rounded-lg overflow-hidden mt-5 flex bg-teal-200">
								<div className="min-w-1 bg-teal-500"></div>
								<div className="py-3 pl-4 pr-5 text-xs">
									<p className="font-semibold">{t.registration.reference_tip}</p>
									<br />
									<p>{t.registration.reference_confirmation}</p>
									<br />
									<p className="font-semibold">{t.registration.reference_tip2}</p>
								</div>
							</div>

							<CertificationUpload />

							<div className="flex items-start mt-6 gap-2">
								<CheckBox
									id="terms"
									{...register("termsAccepted")}
									className="mt-1"
								/>
								<label htmlFor="terms">
									{t.registration.terms_agreement}
									<Link href="#" className="font-semibold text-teal-500">
										{" "}{t.registration.terms}{" "}
									</Link>
									{t.registration.and_the}
									<Link href="#" className="font-semibold text-teal-500"> {t.registration.privacy_policy}</Link>
								</label>
							</div>

							<div className="mt-14 flex gap-6">
								<Btn
									type="button"
									onClick={() => setActiveTab(4)}
									className="w-32"
									variant="primary-outlined"
									size="lg"
								>
									{t.registration.back}
								</Btn>
								<Btn
									type="submit"
									className="w-full"
									variant="primary"
									size="lg"
								>
									{t.registration.complete_registration}
								</Btn>
							</div>
						</div>
					</form>
				</FormProvider>
			</div>
		</motion.div>
	);
};

export default Verification;
