"use client"

import CertificationUpload from "@/components/registration/CertificationUpload";
import Btn from "@/components/sections/Button";
import Img from "@/components/sections/Img";
import Loader from "@/components/sections/Loader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { addDocument } from "@/service/file";
import { getTable } from "@/service/user";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import Title from "./Title";

export default function Documents({ editable }) {
	const { t } = useI18n()
	const [dialogOpen, setDialogOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [documents, setDocuments] = useState<any>([])
	const { user } = useAppContext()

	const methods = useForm({
		defaultValues: {
			certifications: []
		}
	})

	const { handleSubmit, setValue } = methods

	useEffect(() => {
		if (loading) return

		const upload = async () => {
			const documents: any = await getTable(user.id, 'documents')
			setDocuments(documents)
			setValue('certifications', documents)
		}

		upload()
	}, [loading])

	const onSubmit = async (data) => {
		setLoading(true)

		await Promise.all(data.certifications.map(async (c) => {
			await addDocument(c.file, c.name, user.id);
		}));

		setLoading(false)
		setDialogOpen(false)
	}

	return (
		<>
			<Title onEdit={() => setDialogOpen(true)} editable={editable} title={t.documents["My Documents"]} />
			<div className="mt-4 card pt-5 p-5 pb-3">
				{documents.length !== 0 ?
					<div className="grid gap-5 grid-cols-3">
						{documents.map((e: any, i) => (
							<div className="flex flex-col max-w-16 gap-2 items-center" key={i}>
								<div className="w-16 h-16 flex items-center justify-center rounded-lg border border-gray-700">
									<Img src="/id.svg" />
								</div>
								<p className="font-bold text-xs text-center">{t.documents[e.name] || e.name}</p>
							</div>))}
					</div> : <p className="text-center text-sm pb-2">{t['There is no documents yet ):']}</p>}
				{editable &&
					<button
						onClick={() => setDialogOpen(true)}
						className="w-full mt-4 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
						<FaPlus />
						<span className="text-sm font-semibold">
							{t.documents["Add Document"]}
							<span className="text-xs font-medium">{' '}(+5 {t.dashboard["point"]})</span>
						</span>
					</button>}
			</div>

			<Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
				<DialogContent className="p-6 z-[90] outline-none text-gray-900">
					<DialogTitle className="hidden">
						{t.imageUploader.title}
					</DialogTitle>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)} className="font-semibold flex flex-col gap-5 w-full">
							<CertificationUpload deletable />
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
					</FormProvider>
				</DialogContent>
			</Dialog>
		</>)
}
