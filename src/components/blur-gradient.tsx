export function BlurGradient() {
	return (
		<div className="pointer-events-none fixed inset-0 z-40 h-32" aria-hidden="true">
			<div className="absolute inset-0 bg-linear-to-b from-bg to-transparent" />
			<div className="absolute inset-0 mask-[linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] backdrop-blur-[1px]" />
			<div className="absolute inset-0 mask-[linear-gradient(to_bottom,black_0%,black_55%,transparent_80%)] backdrop-blur-xs" />
			<div className="absolute inset-0 mask-[linear-gradient(to_bottom,black_0%,black_30%,transparent_55%)] backdrop-blur-sm" />
			<div className="absolute inset-0 mask-[linear-gradient(to_bottom,black_0%,black_12%,transparent_32%)] backdrop-blur-md" />
		</div>
	);
}
