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
import * as React from "react"

interface CustomSelectProps {
	options: string[]
	placeholder?: string
	className?: string
	onChange?: (value: string | string[]) => void
}


const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder = "Select an option", className, onChange }) => {
	const { t } = useI18n()
	const [selected, setSelected] = React.useState<string>()

	const handleSelect = (value: string) => {
		setSelected(value)
		onChange?.(value)
	}

	return (
		<Select onValueChange={handleSelect}>
			<SelectTrigger
				className={cn(
					"rounded-xl !bg-white border border-gray-10 flex w-full px-4 h-11 font-semibold text-sm outline-none",
					"focus:ring-2 focus:ring-gray-20 transition-all",
					"flex items-center justify-between",
					className
				)}
			>
				<SelectValue placeholder={placeholder}>
					{selected || placeholder}
				</SelectValue>
			</SelectTrigger>
			<SelectContent className="rounded-xl border border-gray-10 !bg-white shadow-lg">
				{options.map((option, index) => (
					<SelectItem key={index} value={option}>
						<span className="flex items-center gap-2">
							{t[option]}
						</span>
					</SelectItem>
				))}
			</SelectContent>
		</Select >
	)
}

export default CustomSelect 