"use client"

import { useI18n } from "@/i18/i18Context";
import React, { useState } from "react";
import CheckBox from "../sections/Checkbox";
import Img from "../sections/Img";

interface CheckboxProps {
	variant: "variant1" | 'variant2';
	data: any[];
	className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ variant, data, className }) => {
	const [selected, setSelected] = useState<string[]>([]);
	const { t } = useI18n()

	const handleChange = (title: string) => {
		setSelected((prev) =>
			prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
		);
	};

	return (
		<div className={"flex flex-wrap gap-3.5 " + className}>
			{data.map((item, index) => (
				<label
					htmlFor={item.title}
					className={`border py-2 cursor-pointer select-none h-14 px-3.5 rounded-lg ${selected.includes(item.title) ? "border-teal-500" : "border-gray-150"}`}
					key={index}
				>
					{variant === "variant1" && (
						<div className="flex text-sm items-start h-full justify-between gap-3">
							<div>
								<h6 className="font-semibold -mb-0.5">{t[item.title]}</h6>
								<p>{t[item.description]}</p>
							</div>
							<CheckBox name={item.title} onChange={() => handleChange(item.title)} />
						</div>
					)}
					{variant === "variant2" && (
						<div className="flex text-sm h-full font-semibold items-center">
							<CheckBox name={item.title} onChange={() => handleChange(item.title)} />
							<h6 className="ml-3 mr-4">{t[item.title]}</h6>
							<Img src={item.img} />
						</div>
					)}
				</label>
			))}
		</div>
	);
};

export default Checkbox;
