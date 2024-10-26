import { Fragment } from "react";
import Transition from "@/lib/transitions";
import Heading from "@/components/ui/page-heading";
import CommentForm from "@/components/comment-form";
import ContactSection from "@/components/contact-section";
import NavigationButtons from "@/components/navigation-buttons";

export default async function Contact() {
	return (
		<Fragment>
			<title>Contact - Developer Portfolio | Ali Hamas</title>
			<div className="grid grid-rows-2 gap-x-10 gap-y-8 pt-5 md:grid-cols-2 md:grid-rows-1 md:pt-20">
				<section>
					<Heading>Contact</Heading>
					<Transition animation={{ name: "fade", delay: 0.1 }}>
						<p className="mt-2 text-xs leading-5 text-zinc-200 md:mt-4 md:text-[15px]">
							Do you want to work with me? Feel free to get in touch with me.
						</p>
					</Transition>
					<ContactSection />
				</section>
				<section>
					<Heading>Drop a line</Heading>
					<Transition animation={{ name: "fade", delay: 0.1 }}>
						<p className="mt-2 text-xs leading-5 text-zinc-200 md:mt-4 md:text-[15px]">
							Leave a comment below. It could be appreciation, suggestion or question.
						</p>
					</Transition>
					<CommentForm />
				</section>
			</div>
			<NavigationButtons delay={0.7} />
		</Fragment>
	);
}
