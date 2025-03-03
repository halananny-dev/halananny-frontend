"use client";

import { useI18n } from "@/i18/i18Context";
import { cn } from "@/lib/utils";
import React from "react";
import { useController } from "react-hook-form";
import CheckBox from "../sections/Checkbox";

interface CheckboxProps {
	variant: "variant1" | "variant2";
	data: any[];
	className?: string;
	control: any;
	name: string;
	groupName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ variant, data, className, control, name, groupName }) => {
	const { t } = useI18n();

	const {
		field: { value = [], onChange },
	} = useController({ name, control });

	const handleChange = (title: string) => {
		const newItems = value.includes(title)
			? value.filter((item: string) => item !== title)
			: [...value, title];

		onChange(newItems);
	};

	return (
		<div className={`flex flex-wrap gap-3.5 ${className}`}>
			{data.map((item, index) => (
				<label
					key={index}
					htmlFor={item.title}
					className={cn(
						"border py-2 cursor-pointer select-none h-14 px-3.5 rounded-lg",
						value.includes(item.title) ? "border-teal-500 shadow-lg" : "border-gray-150"
					)}
				>
					{variant === "variant1" && (
						<div className="flex text-sm items-start h-full justify-between gap-3">
							<div>
								<h6 className="font-semibold -mb-0.5">{(groupName ? t[groupName] : t)[item.title]}</h6>
								<p>{(groupName ? t[groupName] : t)[item.description]}</p>
							</div>
							<CheckBox
								name={item.title}
								checked={value.includes(item.title)}
								onChange={() => handleChange(item.title)}
							/>
						</div>
					)}
					{variant === "variant2" && (
						<div className="flex text-sm h-full font-semibold items-center">
							<CheckBox
								name={item.name}
								checked={value.includes(item.name)}
								onChange={() => handleChange(item.name)}
							/>
							<h6 className="ml-3 mr-4">{(groupName ? t[groupName] : t)[item.name]}</h6>
							<div dangerouslySetInnerHTML={{ __html: item.img }}></div>
						</div>
					)}
				</label>
			))}
		</div>
	);
};

export default Checkbox;
