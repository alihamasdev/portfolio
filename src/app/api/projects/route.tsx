import dbConnect from "@/database/connect";
import { NextResponse } from "next/server";
import projectModel from "@/models/projectModel";

dbConnect();

export async function GET() {
	const projects = await projectModel.find();
	return NextResponse.json(projects);
}
