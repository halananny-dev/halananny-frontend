"use client";

import Availability from "@/components/registration/Availability";
import FamilyProfile from "@/components/registration/FamilyProfile";
import JobRequirements from "@/components/registration/JobRequirements";
import SignUp from "@/components/registration/SignUp";
import Img from "@/components/sections/Img";
import Navbar from "@/components/sections/Navbar";
import { useI18n } from "@/i18/i18Context";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ParentRegistration() {
	const { t } = useI18n();
	const tabs = [
		"sign_up",
		"family_profile_setup",
		"job_requirements",
		"availability_booking",
		"payment_setup",
		"final_confirmation"
	];

	const [activeTab, setActiveTab] = useState(4);

	return (
		<>
			<div className="bg-nanny-register bg-center bg-cover bg-no-repeat pb-12 pt-36">
				<Navbar />
				<h2 className="text-center text-white font-bold text-3xl lg:text-5xl">
					{t.parent_registration}
				</h2>
			</div>

			<div className="mt-7 hidden xl:max-w-6xl max-w-[calc(100%-32px)] mx-auto md:flex justify-between">
				{tabs.map((tab, index) => {
					const active = activeTab > index;

					return (
						<div key={index} className="flex w-44 text-center flex-col items-center cursor-pointer">
							<div className="relative flex items-center">
								<Img src={active ? "/step-active.svg" : "/step-disabled.svg"} />
								{index !== tabs.length - 1 && (
									<div className={
										"lg:w-48 w-40 h-px absolute rtl:right-7 ltr:left-7 " +
										(active ? "bg-teal-500" : "bg-gray-700")
									}></div>
								)}
							</div>
							<p className={"mt-4 lg:text-base text-xs " + (active ? "font-bold text-teal-500" : "font-semibold text-gray-600")}>
								{t[tab]}
							</p>
						</div>
					);
				})}
			</div>

			<div className="xl:max-w-6xl max-w-[calc(100%-32px)] mx-auto mt-8">
				<AnimatePresence mode="wait">
					{activeTab === 1 && <SignUp img="/parent-sign-up.svg" setActiveTab={setActiveTab} />}
					{activeTab === 2 && <FamilyProfile setActiveTab={setActiveTab} />}
					{activeTab === 3 && <JobRequirements setActiveTab={setActiveTab} />}
					{activeTab === 4 && <Availability setActiveTab={setActiveTab} />}
				</AnimatePresence>
			</div>
		</>
	);
}
