"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import Btn from "../sections/Button"
import { useI18n } from "@/i18/i18Context"

export default function NotificationSettings() {
	const [notificationsEnabled, setNotificationsEnabled] = useState(false)
	const { t } = useI18n()

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		toast.success(t.settings["Changes Saved"])
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-gray-900 font-bold">
			<div className="flex items-center justify-between">
				<span>{t.settings["Enable Notifications"]}</span>
				<button
					type="button"
					onClick={() => setNotificationsEnabled(!notificationsEnabled)}
					className={`w-12 h-6 flex items-center rounded-full p-1 transition ${notificationsEnabled ? "bg-teal-500" : "bg-gray-300"
						}`}
				>
					<div
						className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${notificationsEnabled ? "ltr:translate-x-5 rtl:-translate-x-5" : "translate-x-0"}`}
					/>
				</button>
			</div>

			<Btn type="submit" className="mt-6" size="lg" variant="primary">
				{t.settings["Save Changes"]}
			</Btn>
		</form>
	)
}
