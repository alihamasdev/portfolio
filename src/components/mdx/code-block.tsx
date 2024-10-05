export default function CodeBlock({ children }: React.ComponentProps<"pre">) {
	return (
		<section className="relative my-5 max-h-[80dvh] overflow-hidden rounded-lg border border-zinc-800 shadow-lg">
			<pre className="overflow-auto bg-zinc-900 p-4 font-mono text-sm text-zinc-300">
				{children}
			</pre>
		</section>
	);
}
