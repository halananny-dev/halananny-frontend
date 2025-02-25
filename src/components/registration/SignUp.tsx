"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import VerifyNumber from "./VerifyNumber";
import Welcome from "./Welcome";

export default function SignUp() {
	const [screen, setScreen] = useState("signup");

	return (
		<AnimatePresence mode="wait">
			{screen === "signup" && <Welcome
				screen={screen}
				setScreen={setScreen}
			/>}

			{screen === "verify" && <VerifyNumber
				setScreen={setScreen}
			/>}
		</AnimatePresence>
	);
}
