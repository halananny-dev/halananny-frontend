"use client"

import { useI18n } from "@/i18/i18Context"
import OTPInput from "../registration/OTPInput"
import Btn from "../sections/Button"
import Img from "../sections/Img"

export default function VerifyOtp({ otp, setOtp }) {
	const { t } = useI18n()

	return (
		<>
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
		</>
	)
}
