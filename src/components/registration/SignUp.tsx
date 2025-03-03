"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { createUser } from "@/service/user";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import { screenVariants } from "../constants";
import VerifyNumber from "./VerifyNumber";
import Welcome from "./Welcome";

interface SignUpProps {
	setActiveTab: any
	img: string,
	userType: 'nanny' | "user" | "admin"
}

const SignUp: React.FC<SignUpProps> = ({ setActiveTab, img, userType }) => {
	const [screen, setScreen] = useState("signup");
	const [userDetails, setUserDetails] = useState<any>({})
	const { t } = useI18n()
	const { setUserId } = useAppContext()

	const handleVerify = async () => {
		const payload = {
			role: userType,
			phone_number: `${userDetails.country || '+971'}${userDetails.phone_number}`,
			email: userDetails.email,
			name: userDetails.name,
			password: userDetails.password
		}

		const { data, error } = await createUser(payload)

		if (error) {
			if (error.code === '23505') {
				setScreen('signup')
				toast.error(t.toast['This Email is already registered'])
			}
			return
		}

		setUserId(data.id)
		setActiveTab(2)
	}

	return (
		<motion.div key="sign-up" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<AnimatePresence mode="wait">
				{screen === "signup" && <Welcome
					onSubmit={data => setUserDetails(data)}
					img={img}
					setScreen={setScreen}
				/>}
				{screen === "verify" && <VerifyNumber
					onSubmit={handleVerify}
					img={img} />}
			</AnimatePresence>
		</motion.div>
	);
}

export default SignUp