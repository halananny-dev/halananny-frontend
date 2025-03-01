"use client"

import ChangeEmail from "@/components/dashboard/ChangeEmail";
import ChangeNumber from "@/components/dashboard/ChangeNumber";
import ChangePassword from "@/components/dashboard/ChangePassword";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Notification from "@/components/dashboard/Notification";
import Card from "@/components/sections/Card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18/i18Context";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Settings() {
	const { t } = useI18n()
	const [activeTab, setActiveTab] = useState(0)

	const tabs = ['Change my password', 'Change Phone Number', 'Change Email', 'Notifications']

	return (
		<>
			<DashboardHeader title={t.dashboard.settings} />
			<Card className="md:!max-w-4xl !max-w-[calc(100%-32px)] h-[550px] mb-4 border border-gray-5 shadow-none !p-0 rounded-lg">
				<div className="flex flex-col md:flex-row h-full  overflow-auto">
					<div className="min-w-64 sticky top-0 md:border-r md:border-b-0 border-b overflow-auto flex md:flex-col min-h-20 border-gray-5 py-4 px-3 gap-3">
						{tabs.map((tab, index) => (
							<Button
								onClick={() => setActiveTab(index)}
								key={index}
								variant="ghost"
								className={cn(
									"h-12 font-bold text-base w-full text-center",
									activeTab === index ? "bg-teal-500 text-white" : "bg-gray-750 text-gray-900"
								)}
							>
								{t.settings[tab]}
							</Button>
						))}
					</div>
					<div className="grow flex justify-center">
						<div className="sm:max-w-390 max-w-[calc(100%-32px)] w-full h-full py-8">
							{activeTab === 0 && <ChangePassword />}
							{activeTab === 1 && <ChangeNumber />}
							{activeTab === 2 && <ChangeEmail />}
							{activeTab === 3 && <Notification />}
						</div>
					</div>
				</div>
			</Card>
		</>
	)
}