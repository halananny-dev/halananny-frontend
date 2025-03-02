import Flag from "react-world-flags";
import { COUNTRIES } from "../constants";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function CountryCodeSelect() {
	return (
		<Select>
			<SelectTrigger className="w-32 font-semibold bg-white text-gray-900 focus:ring-0 h-12 outline-none border-0 border-r border-r-gray-10 rounded-none">
				<SelectValue className="pl-2" placeholder={
					<div className="flex items-center gap-2.5">
						<Flag code="AE" className="w-4" />
						<span>+971</span>
					</div>
				} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{COUNTRIES.map(({ code, flag }, index) => (
						<SelectItem key={index} value={code}>
							<div className="flex items-center gap-2.5">
								<Flag code={flag} className="w-4" />
								<span>{code}</span>
							</div>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}