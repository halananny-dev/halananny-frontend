"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import { Plans } from "../sections/Pricing";
import Title from "../sections/Title";

const Pricing = ({ setActiveTab }) => {
	const { t } = useI18n();

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="md:px-10 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-60 !items-start" typographyClass="md:text-3xl !leading-snug">
					{t.plans}
				</Title>

				<Plans sm />
				<div className="md:mt-28 mt-16 flex gap-6 max-w-xl mx-auto">
					<Btn
						type="button"
						onClick={() => setActiveTab(4)}
						className="w-32"
						variant="primary-outlined"
						size="lg"
					>
						{t.experience.back}
					</Btn>
					<Btn
						className="text-teal-500 bg-[#F0F8F8] border-0"
						type="button"
						onClick={() => setActiveTab(6)}
						variant="primary"
						size="lg">
						{t.skip}
					</Btn>
				</div>
			</div>
		</motion.div>
	);
};

export default Pricing;
