"use client"

import Navbar from "@/components/sections/Navbar"
import { getProfile } from "@/service/user"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Profile } from "../../profile/Profile"

export default function NannyDetails() {
	const params = useParams()

	const [user, setUser] = useState(null)

	useEffect(() => {
		const init = async () => {
			const user = await getProfile(params.id)

			setUser(user)
		}

		init()
	}, [])

	return (
		<>
			<div className="h-44 px-4 flex items-center justify-center bg-cover bg-mask bg-no-repeat w-full bg-center">
				<Navbar />
			</div>
			<Profile user={user} editable={false} />
		</>
	)
}
