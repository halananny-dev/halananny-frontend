interface RadioProps {
	name: string;
	id: string;
	value: string;
	checked?: boolean;
	onChange?: (value: string) => void;
}

const CustomRadio: React.FC<RadioProps> = ({ name, id, value, checked, onChange }) => {
	return (
		<label className="relative flex items-center cursor-pointer" htmlFor={id}>
			<input
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange?.(value)}
				id={id}
				type="radio"
				className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-teal-500 transition-all"
			/>
			<span
				className="absolute bg-teal-500 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			</span>
		</label>
	);
};

export default CustomRadio;
