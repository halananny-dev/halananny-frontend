"use client";

import Btn from "@/components/sections/Button";
import Img from "@/components/sections/Img";
import Navbar from "@/components/sections/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/i18/i18Context";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Login() {
	const { t } = useI18n();
	const [screen, setScreen] = useState("login");

	const screenVariants = {
		initial: { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
	};

	return (
		<>
			<Navbar />
			<div className="mt-36 flex xl:max-w-6xl max-w-[calc(100%-32px)] mx-auto rounded-2xl border border-gray-200 mb-4">
				<Img src="/login.svg" className="hidden lg:block" />
				<div className="flex items-center p-4 lg:p-0 text-gray-900 justify-center grow">
					<div className="sm:w-96 w-full font-semibold">
						<AnimatePresence mode="wait">
							{/* LOGIN SCREEN */}
							{screen === "login" && (
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
							)}

							{/* FORGOT PASSWORD SCREEN */}
							{screen === "forgot" && (
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
							)}

							{/* RESET PASSWORD SCREEN */}
							{screen === "reset" && (
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
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</>
	);
}
