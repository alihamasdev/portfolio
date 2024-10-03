import dbConnect from "@/database/connect";
import projectModel from "@/models/projectModel";
import { type ProjectType } from "@/models/types";
import { type NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
	const { slug } = params;
	const slugProject: ProjectType | null = await projectModel.findOne({ slug });

	if (slugProject) {
		let { views } = slugProject;
		views += 1;
		const projectData: ProjectType | null = await projectModel.findOneAndUpdate(
			{ slug },
			{ views },
			{ new: true }
		);
		return NextResponse.json(projectData);
	}

	return NextResponse.json({ error: "Project not found" }, { status: 404 });
}
