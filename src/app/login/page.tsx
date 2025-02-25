"use client"

import Btn from "@/components/sections/Button";
import Img from "@/components/sections/Img";
import Navbar from "@/components/sections/Navbar";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/i18/i18Context";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
	const { t } = useI18n();
	const [type, setType] = useState('password')

	return (
		<>
			<Navbar />
			<div className="mt-36 flex xl:max-w-6xl max-w-[calc(100%-32px)] mx-auto rounded-2xl border border-gray-200 mb-4">
				<Img src="/login.svg" className="hidden lg:block" />
				<div className="flex items-center p-4 lg:p-0 text-gray-900 justify-center grow">
					<div className="sm:w-96 w-full font-semibold">
						<h2 className="text-3xl text-center lg:text-start font-bold">{t.Login.title}</h2>
						<div className="mt-9 flex flex-col gap-2">
							<label htmlFor="email">{t.Login.username_email}</label>
							<Input name="email" id="email" type="email" />
						</div>
						<div className="mt-7 flex flex-col gap-2">
							<label htmlFor="password">{t.Login.password}</label>
							<div className="relative flex items-center">
								<Input id="password" name="password" type={type} />
								<button
									onClick={() => setType(type === 'password' ? 'text' : 'password')}
									className="absolute text-2xl text-gray-20 right-5 rtl:left-5 rtl:right-auto">
									{type === 'password' ? <FaEye /> : <FaEyeSlash />}
								</button>
							</div>
						</div>
						<div className="mt-5 text-sm font-semibold flex justify-between items-center">
							<div className="flex gap-2">
								<input type="checkbox" name="remember" id="remember" />
								<label htmlFor="remember">{t.Login.remember}</label>
							</div>
							<Link href="/forget-password">
								{t.Login.lost_password}
							</Link>
						</div>
						<Btn size="lg" variant="primary" className="mt-8 md:mt-14">
							{t.Login.login_button}
						</Btn>
						<p className="mt-6 text-center">
							{t.Login.new_user}{" "}
							<Link className="font-semibold text-teal-500" href="/register">
								{t.Login.create_account}
							</Link>
						</p>
					</div>
				</div>
			</div >
		</>
	)
}
