"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useI18n } from "@/i18/i18Context";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import Cropper from "react-easy-crop";
import Btn from "../sections/Button";
import Img from "../sections/Img";

interface ModalProps {
	open: boolean,
	onClose: any,
	image: any,
	setImage: any
}

const ImageUploaderModal: React.FC<ModalProps> = ({ open, onClose, image, setImage }) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const { t } = useI18n()

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
			<DialogContent className="max-w-800 z-[90] outline-none text-gray-900">
				<DialogTitle className="py-4 text-center text-lg font-bold border-b border-gray-10">Your photo</DialogTitle>
				<div className="pt-12 pb-8 px-18  gap-16 flex items-start">
					<div className="w-48 h-48 rounded-lg relative overflow-hidden">
						{image ? (
							<div className="flex flex-col gap-4 w-full">
								<div className="flex items-center gap-4">
									<Button variant="destructive" size="icon" onClick={handleDeleteImage}>
										<Trash2 className="w-5 h-5" />
									</Button>
								</div>

								<div className="flex flex-col gap-2">
									<label className="text-sm text-gray-600">Zoom</label>
									<Slider
										defaultValue={[1]}
										min={1}
										max={3}
										step={0.1}
										value={[zoom]}
										onValueChange={(value) => setZoom(value[0])}
									/>
								</div>
								<Cropper
									image={image}
									crop={crop}
									zoom={zoom}
									aspect={1}
									onCropChange={setCrop}
									onZoomChange={setZoom}
								/>
							</div>
						) : (
							<div className="w-full h-full">
								<label className="cursor-pointer flex-col rounded-xl relative border w-full h-full border-dashed border-gray-10 flex items-center justify-center">
									<Img src="/upload.svg" />
									<p className="mt-3 text-sm font-semibold text-center">
										<span className="text-teal-500">{t.upload.drop} </span>
										{t.upload.or_take_picture}
									</p>
									<input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
								</label>
								<p className="mt-4 text-sm text-gray-850 text-center">
									250x250 Min / 5 MB Max
								</p>
							</div>
						)}
					</div>
					<div>
						<h3 className="text-2xl font-bold max-w-64">Show clients the best
							version of yourself 🤩!</h3>
						<p className="mt-9 font-bold">
							Upload instructions :
						</p>
						<div className="text-xs">
							<p className="mt-3 font-semibold -mb-0.5">1. Use natural lighting</p>
							<p>Position yourself near a window for soft, flattering light.</p>
							<p className="mt-3 font-semibold -mb-0.5">2. Choose a plain background</p>
							<p>Opt for a neutral wall or uncluttered space to avoid distractions.</p>
							<p className="mt-3 font-semibold -mb-0.5">3. Wear professional, approachable clothing</p>
							<p>Select solid-colored tops in soft tones (e.g., light blue, beige).</p>
							<p className="mt-3 font-semibold -mb-0.5">4. Smile warmly with eye contact</p>
							<p>Relax your face and imagine interacting with a child for a genuine expression.</p>
							<p className="mt-3 font-semibold -mb-0.5">5. Use portrait mode on a smartphone</p>
							<p>Have someone take a chest-up shot (no selfies) and lightly adjust brightness.</p>
						</div>
						<Img src="/instructions.svg" className="mt-7" />
						<div className="flex items-center mt-10 gap-8">
							<Button variant="ghost" onClick={() => onClose()}>
								Cancel
							</Button>
							<Btn size="xl" disabled={!image} variant="primary" className="h-14 w-44">
								Attach photo
							</Btn>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ImageUploaderModal;
