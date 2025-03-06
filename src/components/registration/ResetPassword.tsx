"use client"

import { useI18n } from "@/i18/i18Context"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { IoIosArrowBack } from "react-icons/io"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { screenVariants } from "../constants"
import Btn from "../sections/Button"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface ResetPasswordProps {
	setScreen: (screen: string) => void
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ setScreen }) => {
	const { t } = useI18n()

	const [timeLeft, setTimeLeft] = useState(60)
	const [canResend, setCanResend] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { isValid }
	} = useForm({ mode: "onChange" })

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
			return () => clearTimeout(timer)
		} else {
			setCanResend(true)
		}
	}, [timeLeft])

	const onSubmit = (data: any) => {
		if (data.otp !== "111111") {
			return toast.error(t.Login.invalid_otp)
		}

		if (data.new_password !== data.confirm_password) {
			return toast.error(t.Login.password_mismatch)
		}

		setScreen("login")
	}

	const resendOtp = () => {
		if (!canResend) return
		toast.info(t.Login.otp_resent)
		setTimeLeft(60)
		setCanResend(false)
	}

	return (
		<motion.div
			key="reset"
			variants={screenVariants}
			initial="initial"
			animate="animate"
			exit="exit">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex items-center gap-4">
					<Button
						type="button"
						variant="ghost"
						className="w-5"
						onClick={() => setScreen("forgot")}>
						<IoIosArrowBack className="text-xl" />
					</Button>
					<h2 className="text-3xl font-bold">
						{t.Login.reset_password_title}
					</h2>
				</div>

				<div className="mt-9 flex flex-col gap-2">
					<label htmlFor="otp">
						{t.Login.otp_code}
					</label>
					<Input
						{...register("otp", { required: true, minLength: 4, maxLength: 6 })}
						id="otp"
						type="text" />
				</div>

				<div className="mt-5 flex flex-col gap-2">
					<label htmlFor="new_password">
						{t.Login.new_password}
					</label>
					<Input
						{...register("new_password", { required: true, minLength: 6 })}
						id="new_password"
						type="password" />
				</div>

				<div className="mt-5 flex flex-col gap-2">
					<label htmlFor="confirm_password">
						{t.Login.confirm_password}
					</label>
					<Input
						{...register("confirm_password", { required: true })}
						id="confirm_password"
						type="password" />
				</div>

				<div className="flex justify-between items-center mt-3">
					<button
						type="button"
						onClick={resendOtp}
						disabled={!canResend}
						className={`px-1 text-teal-500 ${!canResend && "opacity-50 cursor-not-allowed"}`}>
						{t.Login.resend_code}
					</button>
					<p className="text-gray-500 text-sm">
						{timeLeft > 0 ? `${timeLeft}${t.Login.s}` : t.Login.ready}
					</p>
				</div>

				<Btn
					type="submit"
					disabled={!isValid}
					size="lg"
					variant="primary"
					className="mt-8 md:mt-8">
					{t.Login.reset_button}
				</Btn>
			</form>
		</motion.div>
	)
}

export default ResetPassword
