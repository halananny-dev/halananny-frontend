import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { screenVariants } from "../constants";
import VerifyOtp from "../dashboard/VerifyOtp";
import Img from "../sections/Img";

interface LoginProps {
	setActiveTab: any
	img: string
}

const VerifyNumber: React.FC<LoginProps> = ({ setActiveTab, img }) => {
	const { t } = useI18n();
	const [otp, setOtp] = useState(Array(6).fill(''))

	const handleSubmit = (e) => {
		e.preventDefault();
		if (otp) {
			setActiveTab(2)
		}
	};

	return (
		<motion.div
			key="verify"
			variants={screenVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="flex rounded-2xl border border-gray-200">
				<Img src={img === '/parent-sign-up.svg' ? img : "/verify.svg"} className="hidden lg:block" />
				<form
					onSubmit={handleSubmit}
					className="flex items-center p-4 lg:p-0 text-gray-900 justify-center grow"
				>
					<div className="sm:w-96 w-full font-semibold">
						<p className="text-teal-500 text-center font-bold text-lg">{t.stepn}</p>
						<h2 className="text-3xl text-center mt-1.2 font-bold">
							{t.verify_your_details}
						</h2>
						<VerifyOtp otp={otp} setOtp={setOtp} />
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default VerifyNumber;
