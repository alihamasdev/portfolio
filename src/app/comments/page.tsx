import { Fragment } from "react";
import { type commentType } from "@/models/types";
import Heading from "@/components/ui/page-heading";
import CommentCard from "@/components/comment-card";
import NavigationButtons from "@/components/navigation-buttons";

export default async function Comments() {
	const request = await fetch(process.env.DOMAIN! + "/api/comments", { cache: "no-store" });
	const comments: commentType[] = await request.json();
	return (
		<Fragment>
			<section className="pt-5 md:pt-20">
				<Heading>Comments</Heading>
				<title>Comments - Developer Portfolio | Ali Hamas</title>
				<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<CommentCard comments={comments} />
				</div>
			</section>
			<NavigationButtons delay={comments.length * 0.1 + 0.1} />
		</Fragment>
	);
}
