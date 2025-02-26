"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { screenVariants } from "../constants";
import VerifyNumber from "./VerifyNumber";
import Welcome from "./Welcome";

interface SignUpProps {
	setActiveTab: any
}

const SignUp: React.FC<SignUpProps> = ({ setActiveTab }) => {
	const [screen, setScreen] = useState("signup");

	return (
		<motion.div key="sign-up" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<AnimatePresence mode="wait">
				{screen === "signup" && <Welcome setScreen={setScreen} />}
				{screen === "verify" && <VerifyNumber setActiveTab={setActiveTab} />}
			</AnimatePresence>
		</motion.div>
	);
}

export default SignUp