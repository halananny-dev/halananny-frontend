"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Title from "../sections/Title";
import CertificationUpload from "./CertificationUpload";
import VideoUpload from "./FileUpload";
import CustomRadio from "./Radio";

const Verification = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [showReference, setShowReference] = useState(false);
	const formRef = useRef<any>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setActiveTab(6);
	};

	const handleChange = () => {
		const form = new FormData(formRef.current);
		const reference = form.get("reference");
		setShowReference(reference === "yes");
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-64">{t.registration.title}</Title>
				<form ref={formRef} onChange={handleChange} onSubmit={handleSubmit} className="grow w-full text-gray-900">
					<div className="max-w-540 mx-auto lg:mx-0">
						<h4 className="font-bold">{t.registration.passport}</h4>
						<p className="mt-1 text-sm">{t.registration.passport_desc}</p>
						<VideoUpload text={t.registration.upload_passport} accept=".pdf" img="/id.svg" />
						<VideoUpload text={t.registration.upload_visa} accept=".pdf" img="/visa.svg" />

						<h4 className="font-bold mt-8">{t.registration.references}</h4>
						<p className="mt-1 text-sm">{t.registration.references_question}</p>
						<div className="mt-6 flex gap-6">
							<div className="flex items-center font-medium gap-2">
								<CustomRadio name="reference" id="yes" value="yes" />
								<label htmlFor="yes">{t.registration.yes}</label>
							</div>
							<div className="flex items-center font-medium gap-2">
								<CustomRadio checked name="reference" id="no" value="no" />
								<label htmlFor="no">{t.registration.no}</label>
							</div>
						</div>

						{showReference && (
							<>
								<h4 className="font-bold mt-8">{t.registration.reference_details}</h4>
								<textarea className="mt-3 textarea" placeholder={t.registration.reference_placeholder} />
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
							<CheckBox name="terms" className="mt-1" />
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
							<Btn type="button" onClick={() => setActiveTab(4)} className="w-32" variant="primary-outlined" size="lg">
								{t.registration.back}
							</Btn>
							<Btn type="submit" className="w-full" variant="primary" size="lg">
								{t.registration.complete_registration}
							</Btn>
						</div>
					</div>
				</form>
			</div>
		</motion.div>
	);
};


export default Verification;
