import Btn from "../sections/Button"
import Img from "../sections/Img"

interface CardProps {
	img: string
	btn: string
	title: string
	description: string
	onClick: any
}

const Card: React.FC<CardProps> = ({ img, title, description, btn, onClick }) => {
	return (
		<div className="max-w-390 w-full border cursor-pointer border-gray-200 rounded-3xl p-3 shadow-lg">
			<Img src={img} className="rounded-t-2xl" />
			<div className="py-9 px-8 font-bold text-gray-900">
				<h3 className="text-28 mb-3">{title}</h3>
				<p>{description}</p>
				<Btn onClick={onClick} variant="primary" size="lg" className="mt-11">
					{btn}
				</Btn>
			</div>
		</div>
	)
}

export default Card