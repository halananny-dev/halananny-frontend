"use client"

import Img from "../sections/Img";
import { useI18n } from "@/i18/i18Context";

export default function VideoUpload() {
	const { t } = useI18n();

	return (
		<div className="p-4 mt-4 gap-5 h-20 max-w-540 w-full cursor-pointer select-none bg-gray-750 relative flex items-center justify-center border border-gray-900 border-dashed rounded-xl">
			<Img src="/video-upload.svg" />
			<p className="text-sm font-medium">
				{t.upload.choose_video}
			</p>
		</div>
	);
}
