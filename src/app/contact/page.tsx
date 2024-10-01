import Transition from "@/lib/transitions";
import Heading from "@/components/ui/page-heading";
import ContactSection from "@/components/contact-section";

export default function Contact() {
	return (
		<div className="my-16 grid min-h-dvh grid-rows-2 gap-x-10 gap-y-8 md:grid-cols-2">
			<title>Contact - Developer Portfolio | Ali Hamas</title>
			<section>
				<Heading>Contact</Heading>
				<Transition animation={{ name: "fade", delay: 0.1 }}>
					<p className="mt-2 text-xs text-zinc-200 md:mt-4 md:text-[15px]">
						Do you want to work with me? Feel free to get in touch with me.
					</p>
				</Transition>
				<ContactSection />
			</section>
			<section></section>
		</div>
	);
}
