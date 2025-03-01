import Img from "@/components/sections/Img";
import { useI18n } from "@/i18/i18Context";
import { IoChevronForward } from "react-icons/io5";

export default function Assistant() {
	const { t } = useI18n()

	return (
		<div className="flex justify-center z-10">
			<button className="drop-shadow-assistant gap-5 flex items-center rounded-full mt-9 py-2 w-full px-6 max-w-390 bg-purple-500">
				<Img src="/assistant.svg" />
				<h5 className="md:text-lg text-sm font-semibold text-white">{t.dashboard.assistant}</h5>
				<IoChevronForward className="text-white ltr:ml-auto rtl:mr-auto" />
			</button>
		</div>
	)
}
