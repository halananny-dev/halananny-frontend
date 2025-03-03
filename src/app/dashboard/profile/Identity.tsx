import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import Title from "./Title";

export default function Identity() {
	const { t } = useI18n();
	const { countries } = useAppContext()

	const identity = [
		{ name: t.dashboard.nationality, value: t.countries[countries[0].country_name], type: 'select', },
		{ name: t.dashboard.age, value: "36", type: "datepicker" },
		{ name: t.dashboard.number_of_kids, value: "1", type: 'number' },
		{ name: t.dashboard.marital_status, value: t['marital-status'].Single, type: 'select', },
		{ name: t.dashboard.religion, value: t.religions.Islam, type: "select", },
	];

	return (
		<>
			<Title title={t.dashboard.identity} />
			<div className="mt-4 card py-6 px-10 flex gap-6 flex-col">
				{identity.map((e, i) => (
					<div className="flex items-center pb-3 border-b border-gray-ea justify-between" key={i}>
						<p>{e.name}</p>
						<p className="font-bold">{e.value}</p>
					</div>
				))}
			</div>
		</>
	);
}
