"use client"

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
	const [isCollapsed, setIsCollapsed] = useState(true)

	useEffect(() => {
		if (typeof window !== undefined) {
			setIsCollapsed(window.innerWidth < 1024)
		}
	}, [])

	return (
		<div className="flex">
			<DashboardSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
			<main className={"grow overflow-auto z-10 " + (isCollapsed ? "lg:h-screen" : "h-screen")}>
				{children}
			</main>
		</div>
	)
}
