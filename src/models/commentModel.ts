import type { commentType } from "./types";
import mongoose, { type Schema } from "mongoose";

const commentSchema: Schema<commentType> = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	username: {
		type: String
	},
	project: {
		type: String
	},
	comment: {
		type: String,
		required: true
	}
});

const commentModel =
	mongoose.models.comments || mongoose.model<commentType>("comments", commentSchema);

export default commentModel;
