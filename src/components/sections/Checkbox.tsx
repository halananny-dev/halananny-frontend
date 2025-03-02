"use client"

import { forwardRef } from "react"
import { FaCheck } from "react-icons/fa"

const CheckBox = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	({ className, ...props }, ref) => (
		<label
			className={`cursor-pointer flex items-center ${className}`}>
			<input
				type="checkbox"
				ref={ref}
				className="hidden peer"
				{...props} />
			<div
				className="w-4 h-4 border rounded-[2px] flex items-center justify-center 
          border-gray-400 bg-white peer-checked:border-teal-500 peer-checked:bg-teal-500">
				<FaCheck className="w-2.5 text-white block" />
			</div>
		</label>
	)
)

CheckBox.displayName = "CheckBox"

export default CheckBox