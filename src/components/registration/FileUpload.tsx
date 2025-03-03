"use client";

import { useI18n } from "@/i18/i18Context";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Img from "../sections/Img";
import { toast } from "react-toastify";

interface VideoProps {
	text?: string;
	img?: any;
	accept?: string;
	value?: File | null;
	onChange?: (file: File | null) => void;
}

const VideoUpload: React.FC<VideoProps> = ({ text, img, accept, value, onChange }) => {
	const { t } = useI18n();
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	const [isUploading, setIsUploading] = useState<boolean>(false);

	const togglePlayPause = () => {
		if (!videoRef.current) return;

		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];

		if (selectedFile) {
			const maxSize = 10 * 1024 * 1024;
			if (selectedFile.size > maxSize) {
				return toast.error("File size exceeds 10MB. Please select a smaller file.");
			}

			if (!accept) {
				const videoElement = document.createElement("video");
				videoElement.preload = "metadata";
				videoElement.src = URL.createObjectURL(selectedFile);

				videoElement.onloadedmetadata = () => {
					window.URL.revokeObjectURL(videoElement.src);

					if (videoElement.duration > 60) {
						return;
					}

					setIsUploading(true);
					simulateUpload(selectedFile);
				};
			}

			onChange?.(selectedFile);
		}
	};

	const simulateUpload = (selectedFile: File) => {
		const totalSize = selectedFile.size;
		let uploaded = 0;

		const interval = setInterval(() => {
			uploaded += totalSize / 20;
			setUploadProgress(Math.min((uploaded / totalSize) * 100, 100));

			if (uploaded >= totalSize) {
				clearInterval(interval);
				setIsUploading(false);
			}
		}, 200);
	};

	const handleRemoveVideo = () => {
		onChange?.(null);
		setUploadProgress(0);
		setIsUploading(false);
	};

	return (
		<div className="p-4 mt-4 gap-5 md:max-w-540 w-full cursor-pointer select-none bg-gray-750 relative flex flex-col items-center border border-gray-900 border-dashed rounded-xl">
			{value ? (
				<div className="w-full gap-6 flex items-center text-gray-900">
					<div className="hidden md:flex flex-col gap-1 items-center">
						<Img src={isUploading ? "/upload-video.svg" : "/uploaded.svg"} />
						<p className="text-xs font-semibold">
							{isUploading ? t.upload_video.uploading : t.upload_video.uploaded}
						</p>
					</div>
					<div className="flex items-center flex-col md:flex-row gap-4 md:gap-0 grow">
						{!accept ? (
							<div className="relative">
								<button
									onClick={togglePlayPause}
									className="absolute z-40 text-white text-xs w-full h-full top-0 left-0 flex items-center justify-center">
									{!isPlaying ? <FaPlay /> : <FaPause />}
								</button>
								<video ref={videoRef} className="md:h-9 w-full md:w-auto rounded-lg">
									<source src={URL.createObjectURL(value)} type={value.type} />
									{t.upload_video.video_not_supported}
								</video>
							</div>
						) : (
							<div className="border-l border-l-gray-10 hidden md:block pl-6">
								<Img src={img} />
							</div>
						)}
						<div className="md:ltr:ml-3 md:rtl:mr-3 w-64 mr-auto md:mr-0">
							<div className="text-sm">
								<p className="truncate overflow-hidden w-full">
									File: <span className="font-semibold">{" "}{value.name}</span>
								</p>
								{isUploading ? (
									<div className="w-full bg-gray-950 mt-3 rounded-full h-1">
										<div
											className="bg-green-700 h-1 rounded-full transition-all"
											style={{ width: `${uploadProgress}%` }}
										></div>
									</div>
								) : (
									<p className="font-light">{(value.size / 1024 / 1024).toFixed(2)} MB</p>
								)}
							</div>
						</div>
						<button onClick={handleRemoveVideo}>
							<Img src="/remove-video.svg" />
						</button>
					</div>
				</div>
			) : (
				<label className="w-full flex gap-4 items-center justify-center cursor-pointer">
					<Img src={img || "/video-upload.svg"} />
					<p className="text-sm font-medium">{text || t.upload_video.choose_video}</p>
					<input type="file" accept={accept || "video/*"} className="hidden" onChange={handleVideoUpload} />
				</label>
			)}
		</div>
	);
};

export default VideoUpload;
