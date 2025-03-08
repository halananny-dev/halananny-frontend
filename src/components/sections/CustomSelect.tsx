"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { useI18n } from "@/i18/i18Context"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Loader from "./Loader"

interface CustomSelectProps {
	options: string[]
	placeholder?: string
	className?: string
	onChange?: (value: string | string[]) => void
	groupName?: any,
	preventOptionTranslation?: boolean,
	defaultValue?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	options,
	placeholder = "Select an option",
	className,
	onChange,
	groupName,
	preventOptionTranslation,
	defaultValue = ''
}) => {
	const { t } = useI18n()
	const [selected, setSelected] = useState(defaultValue)

	const handleSelect = (value) => {
		setSelected(value)
		onChange?.(value)
	}

	return (
		<Select onValueChange={handleSelect} defaultValue={defaultValue}>
			<SelectTrigger
				className={cn(
					"rounded-xl !bg-white border border-gray-10 flex w-full px-4 h-11 font-semibold text-sm outline-none",
					"focus:ring-2 focus:ring-gray-20 transition-all",
					"flex items-center justify-between",
					className
				)}
			>
				<SelectValue placeholder={placeholder}>
					{selected ? groupName ? t[groupName][selected] : t[selected] : placeholder}
				</SelectValue>
			</SelectTrigger>
			<SelectContent
				className="rounded-xl border border-gray-10 !bg-white shadow-lg">
				{options.length === 0 ?
					<Loader className="w-full py-3" />
					: options.map((option, index) => (
						<SelectItem
							key={index}
							value={option}>
							<span className="flex items-center gap-2">
								{groupName ? t[groupName][option] :
									preventOptionTranslation ? option :
										t[option]}
							</span>
						</SelectItem>
					))}
			</SelectContent>
		</Select >
	)
}

export default CustomSelect 