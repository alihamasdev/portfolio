import { Fragment } from "react";
import Heading from "@/components/ui/page-heading";
import NavigationButtons from "@/components/navigation-buttons";

export default async function Comments() {
	return (
		<Fragment>
			<section className="pt-5 md:pt-20">
				<Heading>Comments</Heading>
				<title>Comments - Developer Portfolio | Ali Hamas</title>
			</section>
			<NavigationButtons delay={0.6} />
		</Fragment>
	);
}
