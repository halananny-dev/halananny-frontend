import Flag from "react-world-flags";
import { countries } from "../constants";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function CountryCodeSelect() {
	return (
		<Select>
			<SelectTrigger className="w-28 font-semibold bg-white text-gray-900 focus:ring-0 h-12 outline-none border-0 border-r border-r-gray-10 rounded-none">
				<SelectValue className="pl-2" placeholder={
					<div className="flex items-center gap-2.5">
						<Flag code="US" className="h-4" />
						<span>+1</span>
					</div>
				} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{countries.map(({ code, flag }, index) => (
						<SelectItem key={index} value={code}>
							<div className="flex items-center gap-2.5">
								<Flag code={flag} className="h-4" />
								<span>{code}</span>
							</div>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}