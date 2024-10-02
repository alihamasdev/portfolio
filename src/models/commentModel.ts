import type { commentType } from "./types";
import mongoose, { type Schema } from "mongoose";

const commentSchema: Schema<commentType> = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	project: {
		type: String
	}
});

const commentModel =
	mongoose.models.comments || mongoose.model<commentType>("comments", commentSchema);

export default commentModel;
