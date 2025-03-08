"use client"

import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Btn from "../sections/Button"
import Loader from "../sections/Loader"
import { Input } from "../ui/input"

export default function ChangePassword() {
	const { t } = useI18n()
	const { user } = useAppContext()
	const [loading, setLoading] = useState(false)
	const {
		handleSubmit,
		register,
		watch,
		formState: { isValid },
	} = useForm({ mode: "onChange" })

	const newPassword = watch("new_password")
	const confirmNewPassword = watch("confirm_new_password")

	const onSubmit = async (data) => {
		setLoading(true)
		const { error: signInError } = await supabase.auth.signInWithPassword({
			email: user.email,
			password: data.current_password,
		})

		if (signInError) {
			toast.error(t.Login["Incorrect current password!"])
		}
		else {
			await supabase.auth.updateUser({ password: data.new_password })
			toast.success(t.Login["Updated successfully!"])
		}

		setLoading(false)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<label className="text-gray-900 font-bold">{t.Login.current_password}</label>
			<Input {...register("current_password", { required: true })} type="password" />

			<label className="text-gray-900 font-bold">{t.Login.new_password}</label>
			<Input {...register("new_password", { required: true })} type="password" />

			<label className="text-gray-900 font-bold">{t.Login['Confirm New Password']}</label>
			<Input {...register("confirm_new_password", {
				required: true,
				validate: value => value === newPassword || t.Login["Passwords don't match!"]
			})} type="password" />

			<Btn type="submit"
				disabled={!isValid || newPassword !== confirmNewPassword || loading}
				className="mt-8" size="lg" variant="primary">
				{t.Login['Change Password']}
				{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
			</Btn>
		</form>
	)
}
