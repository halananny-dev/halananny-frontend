import Img from "@/components/sections/Img";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { getAge } from "@/lib/utils";
import Title from "./Title";

export default function Identity({ user, editable }) {
	const { t } = useI18n();
	const { countries } = useAppContext()

	const identity = [
		{ name: t.dashboard.nationality, value: t.countries[countries.find(e => e.id === user.country_id)?.country_name], type: 'select', },
		{ name: t.dashboard.age, value: getAge(user.date_of_birth), type: "datepicker" },
		{ name: t.dashboard.number_of_kids, value: user.number_of_kids, type: 'number' },
		{ name: t.dashboard.marital_status, value: t['marital-status'][user.marital_status], type: 'select', },
		{ name: t.dashboard.religion, value: t.religions[user.religion], type: "select", },
	];

	return (
		<>
			<Title title={t.dashboard.identity} />
			<div className="mt-4 card py-6 px-10 flex gap-6 flex-col">
				{identity.map((e, i) => (
					<div className="flex items-center pb-3 border-b border-gray-ea justify-between" key={i}>
						<p>{e.name}</p>
						{e.value ? <p className="font-bold">{e.value}</p> : editable ? 
						<button className="w-20 text-teal-500 border h-9 flex justify-center items-center gap-2.5 border-teal-500 rounded-lg bg-white">
							<Img src="/pen.svg" className="!w-4" />
							<span className="text-sm font-semibold">
								{t.details["Add"]}
							</span>
						</button> : '-'}
					</div>
				))}
			</div>
		</>
	);
}
