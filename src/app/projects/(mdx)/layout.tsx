import Transition from "@/lib/transitions";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return (
		<article className="prose mx-auto max-w-4xl py-5 md:py-10">
			<Transition animation={{ name: "fade" }}>{children}</Transition>
		</article>
	);
}
