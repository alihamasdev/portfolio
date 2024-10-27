import { Fragment } from "react";
import dbConnect from "@/database/connect";
import commentModel from "@/models/commentModel";
import { type commentType } from "@/models/types";
import CommentCard from "@/components/comment-card";
import NavigationButtons from "@/components/ui/navigation-buttons";

export default async function Comments() {
	await dbConnect();
	const comments: commentType[] = await commentModel.find();
	const array = comments.map((item) => ({
		name: item.name,
		username: item.username,
		image: item.image,
		project: item.project,
		comment: item.comment,
		createdAt: item.createdAt
	}));
	return (
		<Fragment>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<CommentCard comments={array} />
			</div>
			<NavigationButtons delay={comments.length * 0.1 + 0.1} />
		</Fragment>
	);
}
