"use client";

import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { updateUser } from "@/service/user";
import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { screenVariants } from "../constants";
import Btn from "../sections/Button";
import Counter from "../sections/Counter";
import CustomSelect from "../sections/CustomSelect";
import Img from "../sections/Img";
import Loader from "../sections/Loader";
import Title from "../sections/Title";
import { Input } from "../ui/input";

const FamilyProfile = ({ setActiveTab }) => {
	const { t } = useI18n();
	const { userId } = useAppContext()
	const [loading, setLoading] = useState(false)

	const {
		control,
		handleSubmit,
		setValue,
		register,
	} = useForm({
		defaultValues: {
			familySize: 0,
			kids: [{ age: "" }],
			address: "",
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "kids",
	});

	const ages = Array.from({ length: 20 }, (_, i) => `${i + 1} ${i > 1 ? t.years : t.year}`);

	const onSubmit = async (data) => {
		setLoading(true)

		const payload = {
			address: data.address,
			family_size: data.familySize,
			children_ages: data.kids.filter(e => e.age).map(e => e.age)
		}

		await updateUser(payload, userId)

		setActiveTab(3);
		setLoading(false)
	};

	return (
		<motion.div key="profile" variants={screenVariants} initial="initial" animate="animate" exit="exit">
			<div className="flex lg:items-start flex-col items-center lg:flex-row lg:gap-32 md:px-20 p-4 md:py-16 bg-white rounded-md border border-gray-200">
				<Title className="lg:max-w-56 !items-start">{t.family.title}</Title>

				<form onSubmit={handleSubmit(onSubmit)} className="grow w-full max-w-390 text-gray-900 lg:mt-0 mt-6">
					<h4 className="font-bold">{t.family.family_size}</h4>
					<p className="mt-1 text-sm mb-5">{t.family.family_members}</p>

					<Controller
						name="familySize"
						control={control}
						render={({ field }) => <Counter value={field.value} setValue={(val) => setValue("familySize", val)} />}
					/>

					<h4 className="font-bold mt-11">{t.family.children_ages}</h4>
					<div className="mt-5 flex flex-col gap-5">
						{fields.map((kid, index) => (
							<div key={kid.id} className="flex items-center relative">
								<p className="mr-7 min-w-8 text-sm font-semibold">{t.family.kid} {index + 1}</p>

								<Controller
									name={`kids.${index}.age`}
									control={control}
									render={({ field }) => (
										<CustomSelect
											{...field}
											preventOptionTranslation
											placeholder={t.age}
											options={ages}
										/>
									)}
								/>

								{index > 0 && (
									<button
										type="button"
										onClick={() => remove(index)}
										className="absolute right-0 translate-x-full -mr-4"
									>
										<Img src="/delete-kid.svg" />
									</button>
								)}
							</div>
						))}

						<button
							onClick={() => append({ age: "" })}
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
						<Input
							{...register("address")}
							placeholder={t.family.your_address}
							className="pl-12 w-full"
						/>
					</div>

					<Btn className="mt-9" disabled={loading} type="submit" variant="primary" size="lg">
						{t.experience.next_step}
						{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
					</Btn>
				</form>
			</div>
		</motion.div>
	);
};

export default FamilyProfile;
