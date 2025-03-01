"use client"

import { useI18n } from "@/i18/i18Context"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import Btn from "../sections/Button"
import { Input } from "../ui/input"

export default function ChangePassword() {
	const [disabled, setDisabled] = useState(true)
	const formRef = useRef<HTMLFormElement>(null)
	const { t } = useI18n()

	const handleChange = () => {
		const form = new FormData(formRef.current!)

		const current_password = form.get("current_password")?.toString().trim()
		const npassword = form.get("npassword")?.toString().trim()
		const cnpassword = form.get("cnpassword")?.toString().trim()

		setDisabled(!current_password || !npassword || !cnpassword)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const form = new FormData(formRef.current!)

		const npassword = form.get("npassword")?.toString().trim()
		const cnpassword = form.get("cnpassword")?.toString().trim()

		if (npassword !== cnpassword) {
			toast.error(t.Login["Passwords don't match!"])
		}
		else {
			toast.success(t.Login["Updated successfully!"])
		}
	}

	return (
		<form ref={formRef} onChange={handleChange} onSubmit={handleSubmit}>
			<div className="flex flex-col gap-4 w-full text-gray-900 font-bold">
				<label htmlFor="current_password">{t.Login.current_password}</label>
				<Input name="current_password" type="password" id="current_password" />
			</div>

			<div className="flex mt-8 flex-col gap-4 w-full text-gray-900 font-bold">
				<label htmlFor="npassword">{t.Login.new_password}</label>
				<Input name="npassword" type="password" id="npassword" />
			</div>

			<div className="flex mt-4 flex-col gap-4 w-full text-gray-900 font-bold">
				<label htmlFor="cnpassword">{t.Login['Confirm New Password']}</label>
				<Input name="cnpassword" type="password" id="cnpassword" />
			</div>

			<Btn
				type="submit"
				disabled={disabled}
				className="mt-8"
				size="lg"
				variant="primary"
			>
				{t.Login['Change Password']}
			</Btn>
		</form>
	)
}
