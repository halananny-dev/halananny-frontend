"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useI18n } from "@/i18/i18Context";
import React, { useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { IoRefresh } from "react-icons/io5";
import Btn from "../sections/Button";
import Img from "../sections/Img";

interface ModalProps {
	open: boolean;
	onClose: any;
	setImg: any
}

const ImageUploaderModal: React.FC<ModalProps> = ({ open, onClose, setImg }) => {
	const [image, setImage] = useState<string | null>(null);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const { t } = useI18n();
	const cropper = useRef<any>(null);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => setImage(reader.result as string);
			reader.readAsDataURL(file);
		}
	};

	const handleDeleteImage = () => {
		setImage(null);
		setCrop({ x: 0, y: 0 });
		setZoom(1);
	};

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="md:max-w-800 max-w-[calc(100%-32px)] z-[90] outline-none text-gray-900">
				<DialogTitle className="py-4 sticky top-0 bg-white z-40 text-center text-lg font-bold border-b border-gray-10">
					{t.imageUploader.title}
				</DialogTitle>
				<div className="md:pt-12 py-4 md:pb-8 px-4 md:px-18 gap-6 sm:gap-16 flex-col md:flex-row text-center md:text-left flex items-center md:items-start">
					<h3 className="text-2xl font-bold max-w-64 md:hidden">{t.imageUploader.instructionsTitle}</h3>
					{image ? (
						<div className="w-48">
							<div className="relative w-full overflow-hidden h-48 rounded-xl">
								<Cropper
									ref={cropper}
									image={image}
									crop={crop}
									zoom={zoom}
									aspect={1}
									onCropChange={setCrop}
									onZoomChange={setZoom}
								/>
							</div>

							<div className="flex mt-6 gap-2.5">
								<button onClick={() => zoom < 3 && setZoom(zoom + 0.1)}>
									<HiMiniMagnifyingGlassPlus className="text-xl" />
								</button>
								<Slider
									defaultValue={[1]}
									min={1}
									max={3}
									step={0.1}
									value={[zoom]}
									onValueChange={(value) => setZoom(value[0])}
								/>
								<button onClick={() => setZoom(1)}>
									<IoRefresh className="text-xl" />
								</button>
							</div>
							<div className="flex justify-center">
								<button
									onClick={handleDeleteImage}
									className="flex items-center text-red-500 gap-2 text-sm mt-7">
									<FaRegTrashAlt className="w-4" />
									<span>{t.imageUploader.delete}</span>
								</button>
							</div>
						</div>
					) : (
						<div>
							<label className="cursor-pointer flex-col rounded-xl relative border w-48 h-48 border-dashed border-gray-10 flex items-center justify-center">
								<Img src="/upload.svg" />
								<p className="mt-3 text-sm font-semibold text-center">
									<span className="text-teal-500">{t.imageUploader.upload.drop} </span>
									{t.imageUploader.upload.or_take_picture}
								</p>
								<input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
							</label>
							<p className="mt-4 text-sm text-gray-850 text-center">{t.imageUploader.sizeLimit}</p>
						</div>
					)}
					<div>
						<h3 className="text-2xl font-bold max-w-96 md:max-w-64 hidden md:block">{t.imageUploader.instructionsTitle}</h3>
						<p className="mt-9 font-bold rtl:text-right">{t.imageUploader.uploadInstructions}</p>
						<div className="text-xs rtl:text-right">
							{[1, 2, 3, 4, 5].map((step) => (
								<div key={step}>
									<p className="mt-3 font-semibold -mb-0.5">{t.imageUploader.steps[step].title}</p>
									<p>{t.imageUploader.steps[step].description}</p>
								</div>
							))}
						</div>
						<Img src="/instructions.svg" className="mt-7" />
						<div className="flex items-center justify-center md:justify-start mt-10 gap-8">
							<Button variant="ghost" onClick={onClose}>
								{t.imageUploader.cancel}
							</Button>
							<Btn
								onClick={() => {
									const img = cropper.current.props
									setImage(img)
									setImg(img)
									onClose()
								}}
								size="xl"
								disabled={!image}
								variant="primary"
								className="h-14 w-44">
								{t.imageUploader.attach}
							</Btn>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ImageUploaderModal;
