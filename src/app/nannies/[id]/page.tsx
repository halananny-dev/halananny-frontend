"use client"

import Navbar from "@/components/sections/Navbar"
import { useParams } from "next/navigation"
import { Profile } from "../dashboard/profile/Profile"

export default function NannyDetails() {
	const params = useParams()

	return (
		<>
			<div className="h-44 px-4 flex items-center justify-center bg-cover bg-mask bg-no-repeat w-full bg-center">
				<Navbar />
			</div>
			<Profile userId={params.id} editable={false} />
		</>
	)
}
