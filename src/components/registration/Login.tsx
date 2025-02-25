import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Btn from "../sections/Button";
import { Input } from "../ui/input";

interface LoginProps {
	screenVariants: any,
	setScreen: any
}

const LoginScreen: React.FC<LoginProps> = ({ screenVariants, setScreen }) => {
	const { t } = useI18n()

	return (
		<motion.div key="login" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<h2 className="text-3xl text-center lg:text-start font-bold">{t.Login.title}</h2>
			<div className="mt-9 flex flex-col gap-2">
				<label htmlFor="email">{t.Login.username_email}</label>
				<Input name="email" id="email" type="email" />
			</div>
			<div className="mt-7 flex flex-col gap-2">
				<label htmlFor="password">{t.Login.password}</label>
				<Input id="password" name="password" type='password' />
			</div>
			<div className="mt-5 text-sm font-semibold flex justify-between items-center">
				<div className="flex gap-2">
					<input type="checkbox" name="remember" id="remember" />
					<label htmlFor="remember">{t.Login.remember}</label>
				</div>
				<button className="text-teal-500 font-semibold" onClick={() => setScreen("forgot")}>
					{t.Login.lost_password}
				</button>
			</div>
			<Btn size="lg" variant="primary" className="mt-8 md:mt-14">
				{t.Login.login_button}
			</Btn>
			<p className="mt-6 text-center">
				{t.Login.new_user}-
				<Link className="font-semibold text-teal-500" href="/register">
					{t.Login.create_account}
				</Link>
			</p>
		</motion.div>
	)
}

export default LoginScreen;