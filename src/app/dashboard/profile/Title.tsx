import Img from "@/components/sections/Img";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	title: string;
	onEdit?: () => void;
}

const Title: React.FC<Props> = ({ title, className, onEdit }) => {
	return (
		<div className={cn("flex mt-4 items-center gap-2.5 px-2.5", className)}>
			<h3 className="font-bold text-lg">{title}</h3>
			<button onClick={onEdit}>
				<Img src="/pen.svg" />
			</button>
		</div>
	);
};

export default Title;
