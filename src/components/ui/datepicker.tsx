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
import { cn } from "@/lib/utils"


interface Props {
  onChange?: any
}

export const DatePicker: React.FC<Props> = ({ onChange }) => {
  const [date, setDate] = React.useState<Date>()
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
          onSelect={(date) => {
            setDate(date)
            onChange && onChange(date)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}