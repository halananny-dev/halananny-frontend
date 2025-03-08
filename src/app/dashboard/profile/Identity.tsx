import { MARTIAL_STATUS, RELIGIONS } from "@/components/constants";
import Btn from "@/components/sections/Button";
import Counter from "@/components/sections/Counter";
import CustomSelect from "@/components/sections/CustomSelect";
import Img from "@/components/sections/Img";
import Loader from "@/components/sections/Loader";
import { DatePicker } from "@/components/ui/datepicker";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { getAge } from "@/lib/utils";
import { updateUser } from "@/service/user";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "./Title";

export default function Identity({ editable }) {
	const { t } = useI18n();
	const { countries, setUser, user } = useAppContext()
	const [dialogOpen, setDialogOpen] = useState(false)
	const [kids, setKids] = useState(0);
	const [loading, setLoading] = useState(false)
	const [identity, setIdentity] = useState<any>([])

	const { setValue, handleSubmit } = useForm({
		defaultValues: {
			nationality: countries.find(e => e.id === user.country_id)?.country_name || '',
			date_of_birth: user.date_of_birth,
			maritalStatus: user.marital_status,
			religion: user.religion
		}
	})

	const onSubmit = async (data) => {
		setLoading(true)

		const payload = {
			number_of_kids: kids,
			marital_status: data.maritalStatus,
			date_of_birth: data.date_of_birth,
			religion: data.religion,
			nationality_id: countries.find(e => e.nationality === data.nationality)?.id || null,
		}

		const newUser = await updateUser(payload, user.id)

		setUser(newUser)

		setLoading(false)
		setDialogOpen(false)
	}

	useEffect(() => {
		if (user) {
			setIdentity([
				{ name: t.dashboard.nationality, value: t.countries[countries.find(e => e.id === user.nationality_id)?.country_name], },
				{ name: t.dashboard.age, value: getAge(user.date_of_birth), },
				{ name: t.dashboard.number_of_kids, value: user.number_of_kids, },
				{ name: t.dashboard.marital_status, value: t['marital-status'][user.marital_status], },
				{ name: t.dashboard.religion, value: t.religions[user.religion], },
			])
			setKids(user.number_of_kids)
		}
	}, [user])

	return (
		<>
			<Title onEdit={() => setDialogOpen(true)} editable={editable} title={t.dashboard.identity} />
			<div className="mt-4 card py-6 px-10 flex gap-6 flex-col">
				{identity.map((e, i) => (
					<div className="flex items-center pb-3 border-b border-gray-ea justify-between" key={i}>
						<p>{e.name}</p>
						{e.value ? <p className="font-bold">{e.value}</p> : editable ?
							<button
								onClick={() => setDialogOpen(true)}
								className="w-20 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
								<Img src="/pen.svg" className="!w-4" />
								<span className="text-sm font-semibold">
									{t.details["Add"]}
								</span>
							</button> : '-'}
					</div>
				))}
			</div>

			<Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
				<DialogContent className="p-6 z-[90] outline-none text-gray-900">
					<DialogTitle className="hidden">
						{t.imageUploader.title}
					</DialogTitle>
					<form onSubmit={handleSubmit(onSubmit)} className="font-semibold flex flex-col gap-5 w-full">
						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.nationality}</label>
							<CustomSelect
								options={countries?.map(e => e.nationality)}
								defaultValue={countries.find(e => e.id === user.nationality_id)?.nationality}
								groupName="nationalities"
								placeholder={t.profile.nationality}
								onChange={(value: any) => setValue("nationality", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>{t.profile.religion}</label>
							<CustomSelect
								options={RELIGIONS}
								groupName="religions"
								defaultValue={user.religion}
								placeholder={t.profile.religion}
								onChange={(value: any) => setValue("religion", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>
								{t.profile.age}
							</label>
							<DatePicker
								defaultDate={user.date_of_birth || ''}
								onChange={(value) => setValue("date_of_birth", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>
								{t.profile.marital_status}
							</label>
							<CustomSelect
								defaultValue={user.marital_status}
								groupName="marital-status"
								options={MARTIAL_STATUS}
								placeholder={t.profile.marital_status}
								onChange={(value: any) => setValue("maritalStatus", value)}
							/>
						</div>

						<div className="flex flex-col gap-2 font-semibold">
							<label>
								{t.profile.number_of_kids}
							</label>
							<Counter
								value={kids}
								setValue={(value) => setKids(value)}
							/>
						</div>
						<Btn
							type="submit"
							className="mt-6"
							variant="primary"
							size="lg"
						>
							{t.profile.next_step}
							{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
						</Btn>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
