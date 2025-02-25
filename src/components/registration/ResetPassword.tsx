import { useI18n } from "@/i18/i18Context"
import { motion } from 'framer-motion'
import { IoIosArrowBack } from "react-icons/io"
import Btn from "../sections/Button"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface LoginProps {
	screenVariants: any,
	setScreen: any
}

const ResetPassword: React.FC<LoginProps> = ({ screenVariants, setScreen }) => {
	const { t } = useI18n()

	return (
		<motion.div key="reset" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex items-center gap-4">
				<Button variant="ghost" className="w-5" onClick={() => setScreen("forgot")}>
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
			<Btn size="lg" variant="primary" className="mt-8 md:mt-8">
				{t.Login.reset_button}
			</Btn>
		</motion.div>
	)
}

export default ResetPassword
