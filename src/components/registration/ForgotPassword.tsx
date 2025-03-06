"use client"

import { useI18n } from "@/i18/i18Context"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { IoIosArrowBack } from "react-icons/io"
import { toast } from "react-toastify"
import { screenVariants } from "../constants"
import Btn from "../sections/Button"
import Loader from "../sections/Loader"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface LoginProps {
	setScreen: (screen: string) => void
}

const ForgotPassword: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n()
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm({
		mode: "onChange",
	})

	const forgotPassword = async (data: any) => {
		setLoading(true)

		const { data: isUserExists } = await supabase.from('users').select('*').eq('email', data.email).single()

		if (isUserExists) {
			await supabase.auth.signInWithOtp({
				email: data.email,
			});

			toast.success('We`ve sent a magic link to your Gmail.')
			setScreen('login')
		}
		else {
			toast.error(t["User with this email is not found"])
		}

		setLoading(false)
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
					disabled={!isValid || loading}
					className="mt-8 md:mt-8"
					type="submit">
					{t.Login.send_code}
					{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
				</Btn>
			</form>
		</motion.div>
	)
}

export default ForgotPassword
