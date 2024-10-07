import Transition from "@/lib/transitions";
import Heading from "@/components/ui/page-heading";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="pt-5 md:pt-20">
			<Heading>About me</Heading>
			<Transition animation={{ name: "fade", delay: 0.1 }}>
				<section>{children}</section>
			</Transition>
		</section>
	);
}
