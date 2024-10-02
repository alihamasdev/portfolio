import type { ProjectType } from "./types";
import mongoose, { type Schema } from "mongoose";

const projectSchema: Schema<ProjectType> = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		required: true
	},
	slug: {
		type: String,
		unique: true,
		required: true
	},
	image: {
		type: String,
		unique: true,
		required: true
	},
	link: {
		type: String,
		unique: true,
		required: true
	},
	repository: {
		type: String,
		unique: true,
		required: true
	},
	desc: {
		type: String,
		unique: true,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	techStack: {
		type: [String],
		required: true
	},
	views: {
		type: Number,
		default: 0
	}
});

const projectModel =
	mongoose.models.projects || mongoose.model<ProjectType>("projects", projectSchema);

export default projectModel;
