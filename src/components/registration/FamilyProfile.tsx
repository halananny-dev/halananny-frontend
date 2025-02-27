"use client";

import { useI18n } from "@/i18/i18Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import Counter from "../sections/Counter";
import CustomSelect from "../sections/CustomSelect";
import Img from "../sections/Img";
import Title from "../sections/Title";
import { Input } from "../ui/input";

const FamilyProfile = ({ setActiveTab }) => {
	const { t } = useI18n();
	const [familySize, setFamilySize] = useState(0);
	const [kids, setKids] = useState([{ id: Date.now(), age: "" }]);

	const ages = Array.from({ length: 20 }, (_, i) => `${i + 1} ${i > 1 ? t.family.years : t.family.year}`);

	const addKid = () => {
		setKids((prevKids) => [...prevKids, { id: Date.now(), age: "" }]);
	};

	const removeKid = (id) => {
		setKids((prevKids) => prevKids.filter((kid) => kid.id !== id));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-56 !items-start">
					{t.family.title}
				</Title>
				<form onSubmit={handleSubmit} className="grow w-full max-w-390 text-gray-900 lg:mt-0 mt-6">
					<h4 className="font-bold">{t.family.family_size}</h4>
					<p className="mt-1 text-sm mb-5">{t.family.family_members}</p>
					<Counter value={familySize} setValue={setFamilySize} />

					<h4 className="font-bold mt-11">{t.family.children_ages}</h4>
					<div className="mt-5 flex flex-col gap-5">
						{kids.map((kid, index) => (
							<div key={kid.id} className="flex items-center relative">
								<p className="mr-7 min-w-8 text-sm font-semibold">
									{t.family.kid} {index + 1}
								</p>
								<CustomSelect placeholder={t.age} options={ages} />
								{index > 0 && (
									<button
										type="button"
										onClick={(e) => {
											e.preventDefault();
											removeKid(kid.id);
										}}
										className="absolute right-0 translate-x-full -mr-4"
									>
										<Img src="/delete-kid.svg" />
									</button>
								)}
							</div>
						))}
						<button
							onClick={addKid}
							type="button"
							className="rounded-xl border gap-2 border-gray-10 flex items-center w-full text-sm justify-center py-3 font-semibold"
						>
							<Img src="/plus.svg" className="!w-5" />
							<span>{t.family.add_kid}</span>
						</button>
					</div>
					<h4 className="font-bold mt-10">{t.family.address}</h4>
					<div className="relative w-full mt-3 flex items-center">
						<Img src="/location.svg" className="absolute z-10 left-3" />
						<Input placeholder={t.family.your_address} className="pl-12 w-full" />
					</div>

					<Btn
						className="mt-9"
						onClick={() => setActiveTab(3)}
						type="submit"
						variant="primary"
						size="lg"
					>
						{t.experience.next_step}
					</Btn>
				</form>
			</div>
		</motion.div>
	);
};

export default FamilyProfile;
