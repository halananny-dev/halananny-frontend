"use client";

import ForgotPassword from "@/components/registration/ForgotPassword";
import LoginScreen from "@/components/registration/Login";
import ResetPassword from "@/components/registration/ResetPassword";
import Img from "@/components/sections/Img";
import Navbar from "@/components/sections/Navbar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Login() {
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
							{screen === "login" && <LoginScreen
								screenVariants={screenVariants}
								setScreen={setScreen}
							/>}

							{screen === "forgot" && <ForgotPassword
								screenVariants={screenVariants}
								setScreen={setScreen}
							/>
							}

							{screen === "reset" && <ResetPassword
								screenVariants={screenVariants}
								setScreen={setScreen}
							/>}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</>
	);
}
