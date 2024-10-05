import Transition from "@/lib/transitions";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return (
		<article className="prose mx-auto my-5 max-w-4xl md:my-10">
			<Transition animation={{ name: "fade" }}>{children}</Transition>
		</article>
	);
}
