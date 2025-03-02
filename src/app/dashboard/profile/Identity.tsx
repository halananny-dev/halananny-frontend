import { MARTIAL_STATUS, NATIONALITIES, RELIGIONS } from "@/components/constants";
import Btn from "@/components/sections/Button";
import CustomSelect from "@/components/sections/CustomSelect";
import { DatePicker } from "@/components/ui/datepicker";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/i18/i18Context";
import { useState } from "react";
import Title from "./Title";

export default function Identity() {
	const { t } = useI18n();

	const identity = [
		{ name: t.dashboard.nationality, value: t.countries.UAE, type: 'select', options: NATIONALITIES, groupName: "nationalities" },
		{ name: t.dashboard.age, value: "36", type: "datepicker" },
		{ name: t.dashboard.number_of_kids, value: "1", type: 'number' },
		{ name: t.dashboard.marital_status, value: t['marital-status'].Single, type: 'select', options: MARTIAL_STATUS, groupName: "marital-status" },
		{ name: t.dashboard.religion, value: t.religions.Islam, type: "select", options: RELIGIONS, groupName: "religions" },
	];

	const [open, setOpen] = useState(false);

	const handleSave = (e) => {
		e.preventDefault();
	};

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

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="md:max-w-800 max-w-[calc(100%-32px)] z-[90] outline-none text-gray-900">
					<DialogTitle className="py-4 sticky top-0 bg-white z-40 text-center text-lg font-bold border-b border-gray-10">
						{t.dashboard.edit_identity}
					</DialogTitle>

					<form onSubmit={handleSave}>
						<div className="flex flex-col gap-4 p-4">
							{identity.map((item, index) => (
								<div key={index} className="flex justify-between items-center border-b w-full pb-2">
									<p className="font-medium grow">{item.name}</p>
									{item.type === 'select' ? (
										<CustomSelect
											className="w-48"
											groupName={item.groupName}
											options={item.options || []}
										/>
									) : (
										<div className="w-48">
											{item.type === 'datepicker' ? <DatePicker /> :
												<Input type={item.type} defaultValue={item.value} className="h-11" />}
										</div>
									)}
								</div>
							))}
						</div>

						<div className="flex justify-end gap-2 mt-4 p-4">
							<Btn
								onClick={() => setOpen(false)}
								type="button"
								size="lg"
								variant="primary"
								className="bg-white text-gray-900 border w-40">
								{t.dashboard.cancel}
							</Btn>
							<Btn
								variant="primary"
								size="lg"
								className="w-40"
								type="submit">
								{t.dashboard.save}
							</Btn>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
