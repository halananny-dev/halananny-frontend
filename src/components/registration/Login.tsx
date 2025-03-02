import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import { Input } from "../ui/input";

interface LoginProps {
	setScreen: (screen: string) => void;
}

interface FormData {
	email: string;
	password: string;
	remember: boolean;
}

const LoginScreen: React.FC<LoginProps> = ({ setScreen }) => {
	const { t } = useI18n();
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<FormData>({
		mode: "onChange",
	});

	const onSubmit = (data: FormData) => {
		console.log("Login Data:", data);
		// check data and navigate to home screen
	};

	return (
		<motion.div
			key="login"
			variants={screenVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className="text-3xl text-center lg:text-start font-bold">
					{t.Login.title}
				</h2>

				<div className="mt-9 flex flex-col gap-2">
					<label htmlFor="email">
						{t.Login.username_email}
					</label>
					<Input
						{...register("email", {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						})}
						id="email"
						type="email"
					/>
				</div>

				<div className="mt-7 flex flex-col gap-2">
					<label htmlFor="password">
						{t.Login.password}
					</label>
					<Input
						{...register("password", {
							required: true,
							minLength: 6,
						})}
						id="password"
						type="password"
					/>
				</div>

				<div className="mt-5 text-sm font-semibold flex justify-between items-center">
					<div className="flex gap-2">
						<CheckBox
							{...register("remember")}
						/>
						<label htmlFor="remember">
							{t.Login.remember}
						</label>
					</div>
					<button
						type="button"
						className="text-teal-500 font-semibold"
						onClick={() => setScreen("forgot")}
					>
						{t.Login.lost_password}
					</button>
				</div>

				<Btn
					disabled={!isValid}
					type="submit"
					size="lg"
					variant="primary"
					className="mt-8 md:mt-14"
				>
					{t.Login.login_button}
				</Btn>

				<p className="mt-6 text-center">
					{t.Login.new_user} -{" "}
					<Link
						className="font-semibold text-teal-500"
						href="/register">
						{t.Login.create_account}
					</Link>
				</p>
			</form>
		</motion.div>
	);
};

export default LoginScreen;
