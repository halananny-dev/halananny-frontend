"use client"

import { useI18n } from "@/i18/i18Context"
import { useState } from "react"
import { toast } from "react-toastify"
import Btn from "../sections/Button"
import { Input } from "../ui/input"

export default function ChangeEmail() {
	const [email, setEmail] = useState("")
	const [code, setCode] = useState("")
	const [step, setStep] = useState(1)
	const { t } = useI18n()

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		setStep(2)
	}

	const handleCodeSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		toast.success(t.settings["Changes Saved"])
	}

	return (
		<form onSubmit={step === 1 ? handleEmailSubmit : handleCodeSubmit}>
			{step === 1 ? (
				<div className="flex flex-col gap-4 w-full text-gray-900 font-bold">
					<label htmlFor="email">{t.settings["New Email"]}</label>
					<Input name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value.trim())} />
					<Btn type="submit" disabled={!email} className="mt-4" size="lg" variant="primary">
						{t.settings["Send Code"]}
					</Btn>
				</div>
			) : (
				<div className="flex flex-col gap-4 w-full text-gray-900 font-bold">
					<label htmlFor="code">{t.settings["Enter Verification Code"]}</label>
					<Input name="code" type="text" id="code" value={code} onChange={e => setCode(e.target.value.trim())} />
					<Btn type="submit" disabled={!code} className="mt-4" size="lg" variant="primary">
						{t.settings["Verify & Change Email"]}
					</Btn>
				</div>
			)}
		</form>
	)
}
