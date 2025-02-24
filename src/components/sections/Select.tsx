import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import Img from "./Img";

const options = [{ name: "Arabic", flag: "egypt.svg" }, { name: 'English', flag: "/english.svg" }]
const value = 'English'

export default function LanguageSelect() {
    return (
        <Select>
            <SelectTrigger className="w-32 font-semibold text-gray-900 h-12 text-base rounded-full bg-white shadow outline-none">
                <SelectValue placeholder={
                    <div className="flex items-center gap-1">
                        <Img src="/english.svg" className="w-4 h-4 rounded-full" />
                        <span>{value}</span>
                    </div>
                } />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map(({ name, flag }, index) => (
                        <SelectItem key={index} value={name}>
                            <div className="!flex items-center gap-1">
                                <Img src={flag} className="w-4 h-4 rounded-full" />
                                <span>{name}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}