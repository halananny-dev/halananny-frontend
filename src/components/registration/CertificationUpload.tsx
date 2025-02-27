"use client"

import { useI18n } from "@/i18/i18Context";
import { useState } from "react";
import Img from "../sections/Img";

export default function CertificationUpload() {
	const { t } = useI18n();
	const [certifications, setCertifications] = useState([
		{ name: "", file: "" }
	]);

	const addRow = () => {
		setCertifications([...certifications, { name: "", file: "" }]);
	};

	return (
		<div className="mt-8 text-gray-900">
			<div className="flex items-center justify-between">
				<h5 className="font-bold">{t.registration.upload_other}</h5>
				<button onClick={addRow}>
					<Img src="/plus.svg" />
				</button>
			</div>
			<div className="flex flex-col mt-5 border rounded border-b-0 overflow-hidden border-gray-40">
				{certifications.map((certificate, index) => (
					<div key={index} className="flex border-b border-b-40">
						<input
							type="text"
							placeholder={t.registration.item_name}
							className="grow h-8 px-3 text-sm font-semibold outline-none"
						/>
						<div className="relative w-40 flex items-center justify-center border-l text-sm border-gray-40">
							<button className="w-auto">{t.registration.upload}</button>
							<input type="file" className="absolute w-full h-full top-0 opacity-0" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
