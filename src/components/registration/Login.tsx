import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { supabase } from "@/lib/supabase";
import { getUser, logout } from "@/service/user";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import CheckBox from "../sections/Checkbox";
import Loader from "../sections/Loader";
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
	const [loading, setLoading] = useState(false);
	const { setUser } = useAppContext();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<FormData>({
		mode: "onChange",
	});

	const onSubmit = async (data: FormData) => {
		setLoading(true);

		const { error } = await supabase.auth.signInWithPassword({
			email: data.email,
			password: data.password,
		});

		const user = await getUser();

		if (error) {
			toast.error(t[error?.message]);
		} else {
			setUser(user);
			router.push('/dashboard')
		}

		setLoading(false);
	};

	const handleGoogleLogin = async () => {
		await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}auth`,
			},
		});
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
				<h2
					className="text-3xl text-center lg:text-start font-bold">
					{t.Login.title}
				</h2>

				<div className="mt-9 flex flex-col gap-2">
					<label htmlFor="email">{t.Login.username_email}</label>
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
					<label htmlFor="password">{t.Login.password}</label>
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
						<CheckBox {...register("remember")} />
						<label htmlFor="remember">{t.Login.remember}</label>
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
					disabled={!isValid || loading}
					type="submit"
					size="lg"
					variant="primary"
					className="mt-8 md:mt-14"
				>
					{t.Login.login_button}
					{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
				</Btn>

				<button
					type="button"
					onClick={handleGoogleLogin}
					className="w-full mt-4 flex items-center justify-center gap-3 px-4 md:py-4 py-2 border border-gray-10 rounded-18"
				>
					<FcGoogle size={22} />
					<span className="font-semibold text-lg">{t.Login.google_login}</span>
				</button>

				<p className="mt-6 text-center">
					{t.Login.new_user} -{" "}
					<Link className="font-semibold text-teal-500" href="/register">
						{t.Login.create_account}
					</Link>
				</p>
			</form>
		</motion.div>
	);
};

export default LoginScreen;
