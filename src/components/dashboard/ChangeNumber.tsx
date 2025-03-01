"use client"

import { useI18n } from "@/i18/i18Context"
import { useRef, useState } from "react"
import Btn from "../sections/Button"
import CountryCodeSelect from "../sections/CountryCodeSelect"
import { Input } from "../ui/input"
import VerifyOtp from "./VerifyOtp"

export default function ChangeNumber() {
	const [inputDisabled, setInputDisabled] = useState(true)
	const [number, setNumber] = useState<any>()
	const formRef = useRef<HTMLFormElement>(null)
	const [otp, setOtp] = useState(Array(6).fill(''))
	const { t } = useI18n()

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const form = new FormData(formRef.current!)

		const phone = form.get("phone")?.toString().trim()
		setNumber(phone)
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit} className="my-10">
			<div className="flex flex-col font-semibold gap-2">
				<label htmlFor="phone">{t.settings["New Phone Number"]}</label>
				<div className="relative border border-gray-10 rounded-xl overflow-hidden flex">
					<CountryCodeSelect />
					<Input
						onChange={e => setInputDisabled(!e.target.value)}
						id="phone"
						name="phone"
						className="border-none"
						type="text" />
				</div>
			</div>

			{number && <VerifyOtp otp={otp} setOtp={setOtp} />}

			{!number && <Btn
				type="submit"
				disabled={inputDisabled}
				className="mt-8"
				size="lg"
				variant="primary"
			>
				Verify Number
			</Btn>}
		</form>
	)
}
