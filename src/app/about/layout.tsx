import Transition from "@/lib/transitions";
import Heading from "@/components/ui/page-heading";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="my-5 md:my-16">
			<title>About - Developer Portfolio | Ali Hamas</title>
			<Heading>About me</Heading>
			<Transition animation={{ name: "fade", delay: 0.1 }}>
				<article className="prose mt-4 max-w-4xl [&>h2]:!mb-1 [&>h2]:!text-xl md:[&>h2]:!text-2xl [&>p]:!leading-6">
					{children}
				</article>
			</Transition>
		</section>
	);
}
