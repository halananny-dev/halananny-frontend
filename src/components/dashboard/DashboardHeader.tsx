export default function DashboardHeader({ title }) {
	return (
		<div className="h-60 px-4 flex items-center justify-center bg-cover bg-mask bg-no-repeat w-full bg-center">
			<h3 className="font-bold text-center md:text-3xl text-2xl text-white">
				{title}
			</h3>
		</div>
	)
}
