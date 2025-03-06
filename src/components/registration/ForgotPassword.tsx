"use client"

import { useI18n } from "@/i18/i18Context"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { IoIosArrowBack } from "react-icons/io"
import { screenVariants } from "../constants"
import Btn from "../sections/Button"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface LoginProps {
	setScreen: (screen: string) => void
}

const ForgotPassword: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n()

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm({
		mode: "onChange",
	})

	const forgotPassword = (data: any) => {

		// send otp to email
		setScreen("reset")
	}

	return (
		<motion.div
			key="forgot"
			variants={screenVariants}
			initial="initial"
			animate="animate"
			exit="exit">
			<form
				onSubmit={handleSubmit(forgotPassword)}>
				<div className="flex items-center gap-4">
					<Button
						type="button"
						variant="ghost"
						className="w-5"
						onClick={() => setScreen("login")

						}>
						<IoIosArrowBack className="text-xl" />
					</Button>
					<h2 className="text-3xl font-bold">
						{t.Login.forgot_password_title}
					</h2>
				</div>

				<div className="mt-9 flex flex-col gap-2">
					<label htmlFor="email">
						{t.Login.username_email}
					</label>
					<Input
						{...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
						id="email"
						type="email"
					/>
				</div>

				<Btn
					size="lg"
					variant="primary"
					disabled={!isValid}
					className="mt-8 md:mt-8"
					type="submit">
					{t.Login.send_code}
				</Btn>
			</form>
		</motion.div>
	)
}

export default ForgotPassword
