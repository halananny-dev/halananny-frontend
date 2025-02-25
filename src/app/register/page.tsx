"use client"

import Card from "@/components/registration/Card";
import Navbar from "@/components/sections/Navbar";
import Title from "@/components/sections/Title";
import { useI18n } from "@/i18/i18Context";
import { useRouter } from "next/navigation";

export default function Register() {
	const { t } = useI18n();
	const router = useRouter()

	return (
		<>
			<div className="bg-register bg-center bg-cover bg-no-repeat pb-12 pt-36">
				<Navbar />
				<h2 className="text-center text-white font-bold text-3xl lg:text-5xl">
					{t.Register.title}
				</h2>
			</div>
			<div className="flex flex-wrap gap-7 mt-20 max-w-max mx-auto justify-center px-4 lg:px-0 xl:justify-start">
				<Title typographyClass="md:text-4xl" className="xl:!items-start w-full xl:w-80 mr-7">
					{t.Register.subtitle}
				</Title>
				<Card
					onClick={() => router.push('/register/nanny')}
					btn={t.Register.jobSeeker.button}
					description={t.Register.jobSeeker.description}
					title={t.Register.jobSeeker.title}
					img="/option1.svg"
				/>
				<Card
					onClick={() => router.push('/register/parent')}
					img="/option2.svg"
					btn={t.Register.nannySeeker.button}
					description={t.Register.nannySeeker.description}
					title={t.Register.nannySeeker.title}
				/>
			</div>
		</>
	);
}
