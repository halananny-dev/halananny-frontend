export default function Loader({ className }: { className?: string }) {
	return (
		<div className={"flex justify-center " + className}>
			<div className="h-8 w-8 border-4 border-t-gray-900 border-gray-5 rounded-full animate-spin"></div>
		</div>
	);
}
