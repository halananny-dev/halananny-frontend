"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import Img from "../sections/Img";

const Confirmation = () => {
	const { t } = useI18n();

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex flex-col items-center md:px-20 p-4 text-center md:py-60 bg-white rounded-md border border-gray-200">
				<Img src="/success.svg" />
				<h4 className="mt-4 text-green-400 font-bold text-center text-3xl">
					{t.confirmation.title}
				</h4>
				<p className="mt-6 text-center text-xl text-gray-900 font-medium max-w-540 mx-auto">
					{t.confirmation.description}
				</p>
				<Link href="/login" className="mt-28">
					<Btn className="w-72" size="lg" variant="primary">
						{t.login}
					</Btn>
				</Link>
			</div>
		</motion.div>
	);
};

export default Confirmation;
