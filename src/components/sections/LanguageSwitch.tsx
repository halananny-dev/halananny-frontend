"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useI18n } from "@/i18/i18Context";
import Img from "./Img";

const options = [
  { code: "ar", flag: "/egypt.svg" },
  { code: "en", flag: "/english.svg" }
];

export default function LanguageSwitch() {
  const { t, locale, setLocale } = useI18n();

  const handleChange = (lang: string) => {
    setLocale(lang);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-32 font-semibold text-gray-900 h-12 text-base rounded-full bg-white shadow outline-none">
        <SelectValue placeholder={
          <div className="flex items-center gap-1">
            <Img src={options.find(o => o.code === locale)?.flag || ''} className="w-4 h-4 rounded-full" />
            <span>{t[locale]}</span>
          </div>
        } />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ code, flag }) => (
            <SelectItem key={code} value={code}>
              <div className="flex items-center gap-1">
                <Img src={flag} className="w-4 h-4 rounded-full" />
                <span>{t[code]}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
