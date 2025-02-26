"use client";

import Experience from "@/components/registration/Experience";
import Profile from "@/components/registration/Profile";
import SignUp from "@/components/registration/SignUp";
import Img from "@/components/sections/Img";
import Navbar from "@/components/sections/Navbar";
import { useI18n } from "@/i18/i18Context";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NannyRegistration() {
	const { t } = useI18n();
	const tabs = t.tabs;
	const [activeTab, setActiveTab] = useState(1);

	return (
		<>
			<div className="bg-nanny-register bg-center bg-cover bg-no-repeat pb-12 pt-36">
				<Navbar />
				<h2 className="text-center text-white font-bold text-3xl lg:text-5xl">
					{t.nannyRegistration}
				</h2>
			</div>

			<div className="mt-7 hidden max-w-4xl mx-auto md:flex justify-between px-4">
				{tabs.map((tab, index) => {
					const active = activeTab > index;

					return (
						<div key={index} className="flex w-20 flex-col items-center cursor-pointer">
							<div className="relative flex items-center">
								<Img src={active ? "/step-active.svg" : "/step-disabled.svg"} />
								{index !== tabs.length - 1 && (
									<div className={"lg:w-48 w-40 h-px absolute ltr:left-7 rtl:right-7 " + (active ? "bg-teal-500" : "bg-gray-700")}></div>
								)}
							</div>
							<p
								className={
									"mt-4 truncate " +
									(active ? "font-bold text-teal-500" : "font-semibold text-gray-600")
								}
							>
								{tab}
							</p>
						</div>
					);
				})}
			</div>

			<div className="xl:max-w-6xl max-w-[calc(100%-32px)] mx-auto mt-8">
				<AnimatePresence mode="wait">
					{activeTab === 1 && <SignUp setActiveTab={setActiveTab} />}
					{activeTab === 2 && <Profile setActiveTab={setActiveTab} />}
					{activeTab === 3 && <Experience setActiveTab={setActiveTab} />}
				</AnimatePresence>
			</div>
		</>
	);
}
