"use client";

import { Input } from "@/components/ui/input";
import { useRef } from "react";

interface InputProps {
	otp: any;
	setOtp: any
}

const OTPInput: React.FC<InputProps> = ({ otp, setOtp }) => {
	const inputsRef = useRef<HTMLInputElement[]>([]);
	const length = 6

	const handleChange = (index: number, value: string) => {
		if (!/^\d?$/.test(value)) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < length - 1) {
			inputsRef.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Backspace") {
			if (otp[index]) {
				const newOtp = [...otp];
				newOtp[index] = "";
				setOtp(newOtp);
			} else if (index > 0) {
				inputsRef.current[index - 1]?.focus();
			}
		}
	};

	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length).split("");

		if (pasteData.length === length) {
			setOtp(pasteData);
			pasteData.forEach((digit, i) => {
				if (inputsRef.current[i]) inputsRef.current[i].value = digit;
			});
			inputsRef.current[length - 1]?.focus();
		}
	};

	return (
		<div className="flex sm:gap-5 gap-2 justify-center mt-5">
			{otp.map((digit, index) => (
				<Input
					key={index}
					ref={(el) => {
						if (el) inputsRef.current[index] = el;
					}}
					type="text"
					maxLength={1}
					value={digit}
					onChange={(e) => handleChange(index, e.target.value)}
					onKeyDown={(e) => handleKeyDown(index, e)}
					onPaste={handlePaste}
					className={"sm:w-12 w-10 h-12 sm:h-16 text-center rounded-md !px-0 text-xl font-semibold " + (digit ? "border-green-600" : "")}
				/>
			))}
		</div>
	);
}

export default OTPInput