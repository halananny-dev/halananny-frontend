"use client"

import { useState } from "react"
import { FaCheck } from "react-icons/fa"

interface CheckboxProps {
	name: string
	onChange?: any
}

const CheckBox: React.FC<CheckboxProps> = ({ name, onChange }) => {
	const [checked, setChecked] = useState(false)

	return <label htmlFor={name}>
		<input
			type="checkbox"
			id={name}
			name={name}
			className="hidden"
			onChange={(e) => {
				setChecked(e.target.checked)
				onChange && onChange(e)
			}}
		/>
		<div
			className={`w-4 h-4 border rounded-[2px] flex items-center justify-center ${checked ? "border-teal-500 bg-teal-500" : "border-gray-400 bg-white"}`}
		>
			{checked && (
				<FaCheck className="w-2.5 text-white" />
			)}
		</div>
	</label>
}

export default CheckBox