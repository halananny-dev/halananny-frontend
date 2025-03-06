"use client"

import { useI18n } from "@/i18/i18Context"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import OTPInput from "../registration/OTPInput"
import Btn from "../sections/Button"
import Img from "../sections/Img"
import Loader from "../sections/Loader"

export default function VerifyOtp({ otp, setOtp, loading = false }) {
	const { t } = useI18n()

	const [otpTimer, setOtpTimer] = useState(15 * 60);
	const [resendCooldown, setResendCooldown] = useState(0);

	useEffect(() => {
		if (otpTimer > 0) {
			const interval = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
			return () => clearInterval(interval);
		}
	}, [otpTimer]);

	useEffect(() => {
		if (resendCooldown > 0) {
			const interval = setInterval(() => setResendCooldown((prev) => prev - 1), 1000);
			return () => clearInterval(interval);
		}
	}, [resendCooldown]);

	const handleResendOtp = () => {
		if (resendCooldown === 0) {
			setResendCooldown(60);
			setOtpTimer(15 * 60)
		}
	};

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
	};

	return (
		<>
			<div className="flex items-center mt-4 p-2.5 gap-5 justify-center w-full rounded-md bg-teal-100">
				<Img src="/check.svg" />
				<p className="text-sm font-medium text-green-500 max-w-60">
					{t.otp_sent_message}
				</p>
			</div>
			<p className="mt-10 text-sm text-center">
				{t.otp_expiry}
				<span className="text-teal-500 mx-1">
					{otpTimer > 0 ? formatTime(otpTimer) : t.otp_expired}{' '}
					{t.min}</span>
			</p>
			<OTPInput
				setOtp={setOtp}
				otp={otp}
			/>
			<Btn
				type="submit"
				disabled={otp.join('').length !== 6 || loading}
				size="lg"
				variant="primary"
				className="mt-11">
				{t.verify_otp}
				{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
			</Btn>
			<p className="mt-5 text-center">
				{t.didnt_receive_otp} {" "}
				<button
					onClick={handleResendOtp}
					className={cn("font-semibold underline", resendCooldown > 0 ? "text-gray-600" : "text-teal-500")}>
					{resendCooldown > 0 ? formatTime(resendCooldown) : t.resend_otp}
				</button>
			</p>
		</>
	)
}
