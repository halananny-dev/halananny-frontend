"use client"

import { useI18n } from "@/i18/i18Context";
import { useState } from "react";
import Img from "../sections/Img";
import ImageUploaderModal from "./ImgUploaderModal";

export default function FileUpload({ setImg, image }) {
	const { t } = useI18n();
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			{!image ? <div
				onClick={() => setModalOpen(true)}
				className="p-4 mt-4 cursor-pointer select-none bg-gray-750 relative flex-col flex items-center justify-center w-32 h-32 border border-gray-900 border-dashed rounded-xl">
				<Img src="/upload.svg" />
				<p className="mt-3 text-sm font-semibold text-center">
					<span className="text-teal-500">{t.upload.drop} </span>
					{t.upload.or_take_picture}
				</p>
			</div> : <div
				onClick={() => setModalOpen(true)}
				className="h-32 w-32 cursor-pointer relative rounded-xl overflow-hidden"
			>
				<Img src={image.image}
					style={{
						transform: `scale(${image.zoom}) translate(${image.crop.x}px, ${image.crop.y}px)`,
						transformOrigin: 'center',
					}}
				/>
				<Img src="/edit.svg"
					className="absolute text-xs top-3 right-3" />
			</div>
			}
			<ImageUploaderModal
				open={modalOpen}
				setImg={setImg}
				onClose={() => setModalOpen(false)}
			/>
		</>
	);
}
