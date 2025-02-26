import { useI18n } from "@/i18/i18Context"
import { motion } from 'framer-motion'
import { useRef, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { screenVariants } from "../constants"
import Btn from "../sections/Button"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface LoginProps {
	setScreen: any
}

const ResetPassword: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n()
	const [disabled, setDisabled] = useState(true)
	const formRef = useRef<any>(null)

	const resetPassword = (e) => {
		e.preventDefault()
	}

	const handleChange = () => {
		const form: any = new FormData(formRef.current)
		const password = form.get('npassword').trim()
		const confirm_password = form.get('cpassword').trim()

		setDisabled(!(password && confirm_password))
	}

	return (
		<motion.div key="reset" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<form ref={formRef} onSubmit={resetPassword} onChange={handleChange}>
				<div className="flex items-center gap-4">
					<Button type="button" variant="ghost" className="w-5" onClick={() => setScreen("forgot")}>
						<IoIosArrowBack className="text-xl" />
					</Button>
					<h2 className="text-3xl font-bold">{t.Login.reset_password_title}</h2>
				</div>
				<div className="mt-9 flex flex-col gap-2">
					<label htmlFor="npassword">{t.Login.new_password}</label>
					<Input name="npassword" id="npassword" type="password" />
				</div>
				<div className="mt-5 flex flex-col gap-2">
					<label htmlFor="cpassword">{t.Login.confirm_password}</label>
					<Input name="cpassword" id="cpassword" type="password" />
				</div>
				<button className="flex ml-auto mt-2 px-1 text-teal-500">
					{t.Login.resend_code}
				</button>
				<Btn
					type="submit"
					disabled={disabled}
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
