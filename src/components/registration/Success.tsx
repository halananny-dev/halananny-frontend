"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";

const Success = () => {
	const { t } = useI18n();

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex flex-col items-center md:px-20 p-4 text-center md:py-[408px] bg-white rounded-md border border-gray-200">
				<p className="text-[60px]">
					🎉
				</p>
				<h4 className="mt-6 text-gray-900 font-bold text-2xl md:text-4xl mx-auto max-w-540">
					{t.success}
				</h4>
				<Link href="/login" className="mt-12">
					<Btn className="w-72" size="lg" variant="primary">
						{t.login}
					</Btn>
				</Link>
			</div>
		</motion.div>
	);
};

export default Success;
