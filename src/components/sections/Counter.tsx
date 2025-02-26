"use client"

import { useState } from "react"

export default function Counter() {
	const [value, setValue] = useState(0)

	const decrement = () => {
		if (value !== 0) {
			setValue(value - 1)
		}
	}

	const increment = () => {
		setValue(value + 1)
	}

	return (
		<div className="w-28 border border-gray-10 shadow-lg h-11 rounded flex font-bold overflow-hidden">
			<button className="w-8 disabled:text-gray-10"
				disabled={value === 0}
				onClick={decrement}
			>
				-
			</button>
			<input
				type="text"
				readOnly
				className="outline-none border-x border-gray-10 w-12 text-center"
				placeholder="0"
				value={value === 0 ? "" : value}
			/>
			<button
				onClick={increment}
				className="w-8 flex items-center justify-center text-gray-900"
			>
				+
			</button>
		</div>
	)
}