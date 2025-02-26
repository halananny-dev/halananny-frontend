import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface LoginProps {
	setScreen: any
}

const ForgotPassword: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n()
	const [disabled, setDisabled] = useState(true)

	const forgotPassword = (e) => {
		e.preventDefault()
		if (!disabled) {
			setScreen("reset")
		}
	}

	return (
		<motion.div key="forgot" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<form onSubmit={forgotPassword}>
				<div className="flex items-center gap-4">
					<Button type="button" variant="ghost" className="w-5" onClick={() => setScreen("login")}>
						<IoIosArrowBack className="text-xl" />
					</Button>
					<h2 className="text-3xl font-bold">{t.Login.forgot_password_title}</h2>
				</div>
				<div className="mt-9 flex flex-col gap-2">
					<label htmlFor="email2">{t.Login.username_email}</label>
					<Input
						onChange={(e) => setDisabled(!e.target.value.trim())}
						name="email2" id="email2" type="email" />
				</div>
				<Btn
					size="lg"
					variant="primary"
					disabled={disabled}
					className="mt-8 md:mt-8"
					type="submit"
				>
					{t.Login.send_code}
				</Btn>
			</form>
		</motion.div >
	)
}

export default ForgotPassword
