import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import Btn from "../sections/Button";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface LoginProps {
	screenVariants: any,
	setScreen: any
}

const ForgotPassword: React.FC<LoginProps> = ({ screenVariants, setScreen }) => {
	const { t } = useI18n()

	return (
		<motion.div key="forgot" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex items-center gap-4">
				<Button variant="ghost" className="w-5" onClick={() => setScreen("login")}>
					<IoIosArrowBack className="text-xl" />
				</Button>
				<h2 className="text-3xl font-bold">{t.Login.forgot_password_title}</h2>
			</div>
			<div className="mt-9 flex flex-col gap-2">
				<label htmlFor="email2">{t.Login.username_email}</label>
				<Input name="email2" id="email2" type="email" />
			</div>
			<Btn size="lg" variant="primary" className="mt-8 md:mt-8" onClick={() => setScreen("reset")}>
				{t.Login.send_code}
			</Btn>
		</motion.div>
	)
}

export default ForgotPassword
