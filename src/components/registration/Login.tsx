import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import { Input } from "../ui/input";
import CheckBox from "../sections/Checkbox";

interface LoginProps {
	setScreen: any
}

const LoginScreen: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n()
	const [disabled, setDisabled] = useState(true)
	const formRef = useRef<any>(null)

	const login = (e) => {
		e.preventDefault()
	}

	const handleChange = () => {
		const form: any = new FormData(formRef?.current)

		const email = form.get('email').trim()
		const password = form.get('password').trim()

		setDisabled(!(email && password))
	}

	return (
		<motion.div key="login" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<form
				ref={formRef}
				onSubmit={login}
				onChange={handleChange}>
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
						<CheckBox name="remember" />
						<label htmlFor="remember">{t.Login.remember}</label>
					</div>
					<button className="text-teal-500 font-semibold" onClick={() => setScreen("forgot")}>
						{t.Login.lost_password}
					</button>
				</div>
				<Btn disabled={disabled} size="lg" variant="primary" className="mt-8 md:mt-14">
					{t.Login.login_button}
				</Btn>
				<p className="mt-6 text-center">
					{t.Login.new_user}-
					<Link className="font-semibold text-teal-500" href="/register">
						{t.Login.create_account}
					</Link>
				</p>
			</form>
		</motion.div>
	)
}

export default LoginScreen;