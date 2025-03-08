"use client"

import { format } from "date-fns"
import * as React from "react"
import { CiCalendar as CalendarIcon } from "react-icons/ci"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useI18n } from "@/i18/i18Context"
import { cn, getAge } from "@/lib/utils"
import { toast } from "react-toastify"


interface Props {
  onChange?: any
  defaultDate?: any
}

export const DatePicker: React.FC<Props> = ({ onChange, defaultDate }) => {
  const [date, setDate] = React.useState<Date>(defaultDate);
  const { t } = useI18n()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start h-11 w-full border-gray-10 font-semibold rounded-xl text-left",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{t.pickDate}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          disabled={(date) => date > new Date()}
          toYear={new Date().getFullYear() - 16}
          defaultMonth={new Date(new Date().getFullYear() - 16, 0, 1)}
          onSelect={(date: any) => {
            if (getAge(date) < 16) {
              return toast.error(t['People under 16 are not allowed'])
            }
            setDate(date)
            onChange && onChange(date)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}