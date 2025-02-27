import { useI18n } from "@/i18/i18Context";
import { motion } from 'framer-motion';
import Link from "next/link";
import React, { useRef, useState } from "react";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import CountryCodeSelect from "../sections/CountryCodeSelect";
import Img from "../sections/Img";
import { Input } from "../ui/input";

interface Props {
	setScreen: any;
	img: string
}

const Welcome: React.FC<Props> = ({ setScreen, img }) => {
	const { t } = useI18n();
	const formRef = useRef<any>(null)
	const [disabled, setDisabled] = useState(true)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		if (!disabled) {
			setScreen('verify')
		}
	}

	const handleChange = () => {
		const formData = new FormData(formRef.current);
		const values = Object.fromEntries(formData.entries());

		const missingFields = Object.entries(values).filter(([key, value]: any) => !value.trim());

		setDisabled(missingFields.length > 0)
	}

	return (
		<motion.div key="login" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex rounded-2xl border border-gray-200">
				<Img src={img} className="hidden lg:block" />
				<form
					ref={formRef}
					onChange={handleChange}
					onSubmit={handleSubmit}
					className="flex items-center p-4 lg:p-0 text-gray-900 justify-center grow">
					<div className="sm:w-96 w-full font-semibold">
						<p className="text-teal-500 text-center font-bold text-lg">
							1/2
						</p>
						<h2 className="text-3xl text-center mt-1.2 font-bold">
							{t.welcome.title}
						</h2>
						<p className="text-center">{t.welcome.subtitle}</p>

						<div className="mt-10 flex flex-col gap-2">
							<label htmlFor="name">{t.welcome.fullName}</label>
							<Input name="name" id="name" type="text" />
						</div>
						<div className="mt-5 flex flex-col gap-2">
							<label htmlFor="email">{t.welcome.email}</label>
							<Input id="email" name="email" type="email" />
						</div>
						<div className="mt-5 flex flex-col gap-2">
							<label htmlFor="phone">{t.welcome.phone}</label>
							<div className="relative border border-gray-10 rounded-xl overflow-hidden flex">
								<CountryCodeSelect />
								<Input id="phone" name="phone" className="border-none" type="text" />
							</div>
						</div>
						<div className="mt-5 flex flex-col gap-2">
							<label htmlFor="password">{t.welcome.password}</label>
							<Input id="password" name="password" type="password" />
						</div>
						<Btn
							type="submit"
							size="lg"
							variant="primary"
							disabled={disabled}
							className="mt-6">
							{t.welcome.signUp}
						</Btn>
						<p className="mt-5 text-center">
							{t.welcome.loginText}{" "}
							<Link className="font-semibold underline text-teal-500" href="/register">
								{t.welcome.login}
							</Link>
						</p>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default Welcome;
