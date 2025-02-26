"use client"

import { useI18n } from "@/i18/i18Context";
import Img from "../sections/Img";

export default function FileUpload() {
	const { t } = useI18n();

	return (
		<div className="p-4 mt-4 cursor-pointer select-none bg-gray-750 relative flex-col flex items-center justify-center w-32 h-32 border border-gray-900 border-dashed rounded-xl">
			<Img src="/upload.svg" />
			<p className="mt-3 text-sm font-semibold text-center">
				<span className="text-teal-500">{t.upload.drop} </span>
				{t.upload.or_take_picture}
			</p>
		</div>
	);
}
