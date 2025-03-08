import { AVAILABILITY, CURRENCIES, LANGUAGES, PRICE_RANGE, VISA_STATUS } from "@/components/constants";
import Checkbox from "@/components/registration/Checkbox";
import Btn from "@/components/sections/Button";
import CheckBox from "@/components/sections/Checkbox";
import Counter from "@/components/sections/Counter";
import CustomSelect from "@/components/sections/CustomSelect";
import Img from "@/components/sections/Img";
import Loader from "@/components/sections/Loader";
import MultiSelect from "@/components/sections/MultiSelect";
import { DatePicker } from "@/components/ui/datepicker";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { cn } from "@/lib/utils";
import { updateUser } from "@/service/user";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Title from "./Title";

export default function Details({ editable }) {
	const { t } = useI18n()
	const [details, setDetails] = useState<any>([])
	const [loading, setLoading] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	const { user, cities, experienceWithKids, setUser } = useAppContext()

	const { handleSubmit, control, register, setValue, watch } = useForm({
		defaultValues: {
			city: user.available_city.map(e => cities.find(f => f.id === e)?.name) || [],
			desired_salary: user.desired_salary,
			currency: "",
			languages: user.language,
			availability: user.availability,
			visaStatus: user.visa_status,
			available_from: user.available_from,
			experience: user.years_of_experience,
			experienceWithKids: user.experience_with_kids,
		}
	})

	const experience = watch("experience");

	const onSubmit = async (data) => {
		setLoading(true)

		const payload = {
			available_city: data.city?.map(e => cities.find(f => f.name === e)?.id) || null,
			desired_salary: data.desired_salary,
			language: data.languages,
			visa_status: data.visaStatus,
			availability: data.availability,
			available_from: data.available_from,
			years_of_experience: data.experience,
			experience_with_kids: data.experienceWithKids.map(e => experienceWithKids.find(f => f.title === e)?.id),
		}

		const newUser = await updateUser(payload, user.id)

		setUser(newUser)

		setLoading(false)
		setDialogOpen(false)
	}


	useEffect(() => {
		if (!user) return

		const init = async () => {
			setDetails([
				{ name: "City availble to work", value: user.available_city.map(e => cities.find(f => f.id === e).name), groupName: 'cities' },
				{ name: "Desired monthly salary(AED)", value: user.desired_salary },
				{ name: "Languages", value: user.language?.join(', ') },
				{ name: "Desired job", value: user.availability, groupName: 'availability' },
				{ name: "Visa status", value: user.visa_status },
				{ name: "Available from", value: user.available_from ? new Date(user.available_from).toLocaleDateString() : '' },
				{ name: "Year of experience", value: user.years_of_experience },
				{ name: "Experience with kids", value: user.experience_with_kids.map(e => experienceWithKids.find(f => f.id === e)?.title), groupName: "experience-with-kids" },
			])
		}

		init()
	}, [user])

	return (
		<>
			<Title
				onEdit={() => setDialogOpen(true)}
				editable={editable}
				className="mt-6"
				title={t.dashboard.details} />
			<div className="mt-2.5 card px-6 flex flex-col gap-2 text-sm">
				{details.map((e, i) => (
					<div
						className={cn("flex items-center pb-2 justify-between",
							i !== details.length - 1 && "border-b border-gray-ea"
						)}
						key={i}
					>
						<p>{t.details[e.name]}</p>
						{Array.isArray(e.value) && (Array.from(e.value).length !== 0 ?
							<div key={i}>
								{e.value.map((f) => (
									<p
										className="font-semibold sm:text-base text-xs rtl:text-left ltr:text-right"
										key={f}>
										{t[e.groupName ? e.groupName : "details"][f]}
									</p>
								))}
							</div> : editable ?
								<button
									onClick={() => setDialogOpen(true)}
									className="w-36 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
									<Img src="/pen.svg" />
									<span className="text-sm font-semibold">
										{t.details["Add"]}
										<span className="text-xs font-medium">{' '}(+2 {t.dashboard["point"]})</span>
									</span>
								</button> : '-')}

						{!Array.isArray(e.value) &&
							(e.value ?
								<p className="font-bold">{t.details[e.value] || e.value}</p> :
								editable ?
									<button
										onClick={() => setDialogOpen(true)}
										className="w-36 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
										<Img src="/pen.svg" />
										<span className="text-sm font-semibold">
											{t.details["Add"]}
											<span className="text-xs font-medium">{' '}(+2 {t.dashboard["point"]})</span>
										</span>
									</button> : '-'
							)}
					</div>
				))}

			</div >

			<Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
				<DialogContent className="p-6 z-[90] outline-none text-gray-900">
					<DialogTitle className="hidden">
						{t.imageUploader.title}
					</DialogTitle>
					<form onSubmit={handleSubmit(onSubmit)} className="font-semibold flex flex-col gap-5 w-full">
						<div>
							<h4 className="font-bold">{t.jobPreference.available_cities}</h4>
							<Controller
								name="city"
								control={control}
								render={({ field }) => (
									<MultiSelect
										defaultSelected={user.available_city.map(e => cities.find(f => f.id === e).name)}
										{...field}
										groupName="cities"
										options={cities.map(e => e.name)}
										placeholder={t.jobPreference.cities_placeholder}
										className="mt-2 max-w-[464px] overflow-auto !bg-transparent"
									/>
								)}
							/>
						</div>
						<div>
							<h4 className="font-bold">{t.jobPreference.desired_salary}</h4>
							<div className="flex gap-3 mt-3">
								<Controller
									name="currency"
									control={control}
									render={({ field }) => (
										<CustomSelect
											{...field}
											options={CURRENCIES}
											groupName="currencies"
											placeholder={t.jobPreference.currency_placeholder}
											className="w-24 text-sm"
										/>
									)}
								/>
								<Controller
									name="desired_salary"
									control={control}
									render={({ field }) => (
										<CustomSelect
											{...field}
											defaultValue={user.desired_salary}
											groupName="price-range"
											options={PRICE_RANGE}
											placeholder={t.jobPreference.salary_range_placeholder}
										/>
									)}
								/>
							</div>
						</div>
						<div>
							<h4 className="font-bold">{t.jobPreference.desired_jobs}</h4>
							<Controller
								name="availability"
								control={control}
								render={({ field }) => (
									<MultiSelect
										{...field}
										groupName="availability"
										defaultSelected={user.availability}
										options={AVAILABILITY}
										placeholder={t.jobPreference.job_list_placeholder}
										className="mt-2"
									/>
								)}
							/>
						</div>
						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.visa_status}</label>
							<CustomSelect
								defaultValue={user.visa_status}
								groupName="visa-status"
								options={VISA_STATUS}
								placeholder={t.profile.visa_status}
								onChange={(value: any) => setValue("visaStatus", value)}
							/>
						</div>
						<div>
							<h4 className="font-bold mb-4">{t.jobPreference.available_from}</h4>
							<Controller
								name="available_from"
								control={control}
								render={({ field }) => <DatePicker defaultDate={user.available_from} {...field} />}
							/>
						</div>
						<div>
							<h4 className="font-bold">{t.experience.experience_with_kids}</h4>
							<Checkbox
								defaultValue={user.experience_with_kids.map(e => experienceWithKids.find(f => f.id === e)?.title)}
								variant="variant1"
								groupName="experience-with-kids"
								className="mt-5"
								data={experienceWithKids}
								control={control}
								name="experienceWithKids"
							/>
						</div>
						<div>
							<h4 className="font-bold">{t.experience.language_preference}</h4>
							<div className="mt-5 flex gap-5">
								{LANGUAGES.map((lang, index) => (
									<label key={index} htmlFor={lang} className="flex items-center gap-2.5">
										<CheckBox
											id={lang}
											value={lang}
											{...register("languages")}
										/>
										<span className="font-medium">{t.languages[lang]}</span>
									</label>
								))}
							</div>
						</div>

						<div>
							<h4 className="font-bold mb-5">{t.experience.years_of_experience}</h4>
							<Counter
								value={experience}
								setValue={(value) => setValue("experience", value)}
							/>
						</div>
						<Btn
							type="submit"
							className="mt-6"
							disabled={loading}
							variant="primary"
							size="lg"
						>
							{t.dashboard.save}
							{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
						</Btn>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
}