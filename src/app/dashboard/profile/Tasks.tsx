"use client"

import Checkbox from "@/components/registration/Checkbox"
import Btn from "@/components/sections/Button"
import Loader from "@/components/sections/Loader"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { updateUser } from "@/service/user"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaPlus } from "react-icons/fa"
import Title from "./Title"

export default function Tasks({ editable }) {
	const { t } = useI18n()
	const { user, setUser, capabilities } = useAppContext()
	const [dialogOpen, setDialogOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const { control, handleSubmit } = useForm({
		defaultValues: {
			capabilities: user.capabilities?.map(e => capabilities.find(c => c.id == e)?.name),
		}
	})

	const onSubmit = async (data) => {
		setLoading(true)

		const payload = {
			capabilities: data.capabilities.map(e => capabilities.find(c => c.name === e).id),
		}

		const newUser = await updateUser(payload, user.id)

		setUser(newUser)

		setLoading(false)
		setDialogOpen(false)
	}

	return (
		<>
			<Title
				onEdit={() => setDialogOpen(true)}
				editable={editable}
				className="mt-6" title={t.dashboard["My Tasks"]} />
			<div className="mt-4 px-6 card">
				<div className="gap-2 flex flex-wrap">
					{user.capabilities?.length !== 0 ? user.capabilities.map(f => capabilities.find(e => e.id === f)).map((e, i) => (
						<div className="flex flex-col w-16 gap-2 items-center" key={i}>
							<div className="w-full h-16 flex items-center justify-center rounded-lg border border-gray-700">
								<div className="text-teal-500" dangerouslySetInnerHTML={{ __html: e.img }}></div>
							</div>
							<p className="font-bold text-xs text-center">
								{t.capabilities[e.name]}
							</p>
						</div>
					)) : <p className="text-center w-full text-sm">There is no task yet ):</p>}
				</div>
				{editable && <button
					onClick={() => setDialogOpen(true)}
					className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
					<FaPlus />
					<span className="text-sm font-semibold">{t.dashboard.add}
						<span className="text-xs font-medium">{' '}(+5 ${t.dashboard.point})</span>
					</span>
				</button>}
			</div>

			<Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
				<DialogContent className="p-6 z-[90] outline-none text-gray-900">
					<DialogTitle className="hidden">
						{t.imageUploader.title}
					</DialogTitle>
					<form onSubmit={handleSubmit(onSubmit)} className="font-semibold flex flex-col gap-5 w-full">
						<div>
							<h4 className="font-bold">{t.experience.tasks_you_can_perform}</h4>
							<Checkbox
								defaultValue={user.capabilities?.map(e => capabilities.find(c => c.id == e)?.name)}
								name="capabilities"
								control={control}
								groupName="capabilities"
								variant="variant2"
								className="mt-5"
								data={capabilities}
							/>
						</div>
						<Btn
							type="submit"
							className="mt-6"
							disabled={loading}
							variant="primary"
							size="lg"
						>
							{t.dashboard.save}
							{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
						</Btn>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
}
