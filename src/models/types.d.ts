import type { Document } from "mongoose";

export interface ProjectType extends Document {
	title: string;
	slug: string;
	image: string;
	link: string;
	repository: string;
	desc: string;
	date: string;
	techStack: string[];
	views: number;
}

export interface commentType extends Document {
	name: string;
	username?: string;
	comment: string;
	project?: string;
	image: string;
}
