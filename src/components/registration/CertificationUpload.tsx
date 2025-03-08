"use client";

import { useI18n } from "@/i18/i18Context";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Img from "../sections/Img";
import { removeDocument } from "@/service/file";
import { useAppContext } from "@/i18/AppContext";

export default function CertificationUpload({ deletable = false }) {
	const { t } = useI18n();
	const { control, register, setValue } = useFormContext();
	const { user } = useAppContext()

	const { fields, append, remove } = useFieldArray({
		control,
		name: "certifications",
	});

	const addRow = () => {
		append({ name: "", file: null });
	};


	const handleRemove = async (certificate, index) => {
		await removeDocument(certificate.name, user.id)

		remove(index)
	}

	return (
		<div className="mt-8 text-gray-900">
			<div className="flex items-center justify-between">
				<h5 className="font-bold">{t.registration.upload_other}</h5>
				<button onClick={addRow}>
					<Img src="/plus.svg" />
				</button>
			</div>
			<div className="flex flex-col max-h-[400px] overflow-auto mt-5 border rounded border-b-0 border-gray-40">
				{fields.map((certificate, index) => (
					<div key={certificate.id} className="flex border-b border-b-40">
						<input
							type="text"
							placeholder={t.registration.item_name}
							className="grow h-8 px-3 text-sm font-semibold outline-none"
							{...register(`certifications.${index}.name`, { required: true })}
						/>
						<div className="relative w-40 flex items-center justify-center border-l text-sm border-gray-40">
							<Controller
								name={`certifications.${index}.file`}
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<button type="button" className="w-auto">
											{field.value ? field.value.name : t.registration.upload}
										</button>
										<input
											type="file"
											className="absolute w-full h-full top-0 opacity-0"
											onChange={(e: any) => {
												const file = e.target.files[0];

												const maxSize = 10 * 1024 * 1024;
												if (file.size > maxSize) {
													return toast.error("File size exceeds 10MB. Please select a smaller file.");
												}

												setValue(`certifications.${index}.file`, file);
											}}
										/>
									</>
								)}
							/>
						</div>
						{deletable && <button
							type="button"
							onClick={() => handleRemove(certificate, index)}
							className="h-8 flex justify-center items-center w-8 p-px border-l border-gray-40"
						>
							<FaTrashAlt className="text-red-500" />
						</button>}
					</div>
				))}
			</div>
		</div>
	);
}
