import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import Img from "../sections/Img";
import OTPInput from "./OTPInput";

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
						<div className="flex items-center mt-4 p-2.5 gap-5 justify-center w-full rounded-md bg-teal-100">
							<Img src="/check.svg" />
							<p className="text-sm font-medium text-green-500 max-w-60">
								{t.otp_sent_message}
							</p>
						</div>
						<p className="mt-10 text-sm text-center">
							{t.otp_expiry} <span className="text-teal-500">{t.otp_expiry_time}</span>
						</p>
						<OTPInput
							setOtp={setOtp}
							otp={otp}
						/>
						<Btn
							type="submit"
							disabled={otp.join('').length !== 6}
							size="lg"
							variant="primary"
							className="mt-11">
							{t.verify_otp}
						</Btn>
						<p className="mt-5 text-center">
							{t.didnt_receive_otp} {" "}
							<button
								className="font-semibold underline text-teal-500">
								{t.resend_otp}
							</button>
						</p>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default VerifyNumber;
