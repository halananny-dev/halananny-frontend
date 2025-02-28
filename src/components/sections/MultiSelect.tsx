"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18/i18Context";
import { cn } from "@/lib/utils";
import * as React from "react";
import Img from "./Img";
import { FaChevronDown } from "react-icons/fa";

interface CustomMultiSelectProps {
	options: string[];
	placeholder?: string;
	className?: string;
	onChange?: (value: string[]) => void;
	groupName?: string
}

const MultiSelect = ({
	options,
	placeholder = "Select options",
	className,
	onChange,
	groupName
}: CustomMultiSelectProps) => {
	const { t } = useI18n();
	const [selected, setSelected] = React.useState<string[]>([]);
	const [open, setOpen] = React.useState(false);

	const handleSelect = (value: string) => {
		let newSelected = selected.includes(value)
			? selected.filter((v) => v !== value)
			: [...selected, value];

		setSelected(newSelected);
		onChange?.(newSelected);
	};

	const handleRemove = (e: React.MouseEvent, value: string) => {
		e.stopPropagation();
		const newSelected = selected.filter((v) => v !== value);
		setSelected(newSelected);
		onChange?.(newSelected);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"rounded-xl !bg-white border border-gray-10 flex w-full px-4 h-11 font-semibold text-sm",
						"focus:ring-2 focus:ring-gray-20 transition-all flex items-center justify-between",
						className
					)}
				>
					{selected.length > 0 ? (
						<div className="flex items-center gap-2">
							{selected.map((s, index) => (
								<div key={index} className="bg-teal-500 text-sm rounded-full py-1 px-3.5 text-white flex items-center gap-2">
									{(groupName ? t[groupName] : t)[s]}
									<div
										onClick={(e) => handleRemove(e, s)}
										className="ml-2 focus:outline-none"
									>
										<Img src="/close.svg" className="w-3 h-3 inline" />
									</div>
								</div>
							))}
						</div>
					) : (
						placeholder
					)}
					<FaChevronDown />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="!w-max p-2 popover-content rounded-xl border border-gray-10 !bg-white shadow-lg">
				<Command className="w-full">
					<CommandGroup>
						{options.map((option, index) => (
							<CommandItem
								key={index}
								onSelect={() => handleSelect(option)}
								className="cursor-pointer flex justify-between"
							>
								{(groupName ? t[groupName] : t)[option]}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default MultiSelect;
