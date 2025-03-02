"use client"

import { useI18n } from "@/i18/i18Context"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import Img from "../sections/Img"

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const { t } = useI18n()
	const router = useRouter()

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener("click", handleClickOutside)
		return () => document.removeEventListener("click", handleClickOutside)
	}, [])

	return (
		<div ref={dropdownRef} className="relative w-20">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="rounded-full !bg-white border flex items-center border-gray-950 gap-3 w-20 h-11 font-semibold outline-none justify-center"
			>
				<Img src="/egypt.svg" />
				<FaChevronDown className={`text-gray-900 transition-transform ${isOpen ? "rotate-180" : ""}`} />
			</button>

			{isOpen && (
				<ul className="absolute overflow-hidden w-40 mt-3 bg-white border border-gray-950 right-0 rounded-xl shadow-lg z-10">
					<li
						onClick={() => router.push('/dashboard/profile')}
						className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-gray-900 font-semibold"
					>
						{t.dashboard.profile}
					</li>
					<li
						onClick={() => setIsOpen(false)}
						className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-red-500 font-semibold"
					>
						{t.dashboard.logout}
					</li>
				</ul>
			)}
		</div>
	)
}

export default Dropdown
