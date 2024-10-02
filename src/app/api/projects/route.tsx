import dbConnect from "@/database/connect";
import projectModel from "@/models/projectModel";
import type { ProjectType } from "@/models/types";
import { type NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET(req: NextRequest): Promise<NextResponse<ProjectType[]>> {
	const { searchParams } = req.nextUrl;
	const titleQuery = searchParams.get("title");
	let projects: ProjectType[] | [] = [];
	if (titleQuery) {
		projects = await projectModel.find({}, "title");
	} else {
		projects = await projectModel.find();
	}
	return NextResponse.json(projects);
}
