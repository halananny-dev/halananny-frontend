"use client"

import { useAppContext } from "@/i18/AppContext"
import { useI18n } from "@/i18/i18Context"
import { logout } from "@/service/user"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaChevronDown, FaUser } from "react-icons/fa"

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const { t } = useI18n()
	const router = useRouter()
	const { setUser, user } = useAppContext()

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
				{user?.profile_photo_url ?
					<img alt="profile" src={user.profile_photo_url} className='!w-5 !h-5 rounded-full' /> :
					<FaUser className='w-5 h-5 rounded-full' />
				}
				<FaChevronDown className={`text-gray-900 transition-transform ${isOpen ? "rotate-180" : ""}`} />
			</button>

			{isOpen && (
				<ul className="absolute overflow-hidden w-40 mt-3 bg-white border border-gray-950 lg:right-0 left-0 lg:left-auto rounded-xl -top-[270%] lg:top-auto shadow-lg z-10">
					<li
						onClick={() => router.push('/dashboard/profile')}
						className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-gray-900 font-semibold"
					>
						{t.dashboard.profile}
					</li>
					<li
						onClick={async () => {
							setIsOpen(false)
							await logout()
							setUser(null)
							router.push('/')
						}
						}
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
