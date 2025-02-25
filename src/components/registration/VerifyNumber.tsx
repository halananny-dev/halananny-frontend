import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import Img from "../sections/Img";
import { Input } from "../ui/input";

interface LoginProps {
	setScreen: any
}

const VerifyNumber: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n()

	return (
		<motion.div key="verify" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex rounded-2xl border border-gray-200">
				<Img src="/verify.svg" className="hidden lg:block" />
				<div className="flex items-center p-4 lg:p-0 text-gray-900 justify-center grow">
					<div>
						<div className="flex items-center gap-4">
							<h2 className="text-3xl font-bold">{t.Login.forgot_password_title}</h2>
						</div>
						<div className="mt-9 flex flex-col gap-2">
							<label htmlFor="email2">{t.Login.username_email}</label>
							<Input name="email2" id="email2" type="email" />
						</div>
						<Btn size="lg" variant="primary" className="mt-8 md:mt-8" onClick={() => setScreen("reset")}>
							{t.Login.send_code}
						</Btn>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default VerifyNumber
