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
	onChange?: (value: string) => void
}

const CustomSelect = React.forwardRef<HTMLButtonElement, CustomSelectProps>(
	({ options, placeholder = "Select an option", className, onChange }, ref) => {
		const { t } = useI18n()

		return (
			<Select onValueChange={onChange}>
				<SelectTrigger
					ref={ref}
					className={cn(
						"rounded-xl !bg-white border border-gray-10 flex w-full px-6 h-11 font-semibold text-sm outline-none",
						"focus:ring-2 focus:ring-gray-20 transition-all",
						"flex items-center justify-between",
						className
					)}
				>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent className="rounded-xl border border-gray-10 !bg-white shadow-lg">
					{options.map((option, index) => (
						<SelectItem key={index} value={option}>
							{t[option]}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		)
	}
)

CustomSelect.displayName = "CustomSelect"

export { CustomSelect }

