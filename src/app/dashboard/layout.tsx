"use client"

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useState } from "react";

export default function Layout({ children }) {
	const [isCollapsed, setIsCollapsed] = useState(false)

	return (
		<div className="flex">
			<DashboardSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
			<main className={"grow overflow-auto z-10 " + (isCollapsed ? "lg:h-screen" : "h-screen")}>
				{children}
			</main>
		</div>
	)
}
