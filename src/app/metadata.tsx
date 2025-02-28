"use client";

import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import { useEffect, useState } from "react";

const translations: any = { en, ar };

export default function Metadata() {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const observer = new MutationObserver(() => {
			const newLang = document.documentElement.lang || "en";
			setLang(newLang);
		});

		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

		return () => observer.disconnect();
	}, []);

	return (
		<head>
			<title>{translations[lang].title}</title>
			<meta name="description" content={translations[lang].description} />
		</head>
	);
}
