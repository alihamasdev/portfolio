import dbConnect from "@/database/connect";
import commentModel from "@/models/commentModel";
import { type NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET() {
	try {
		const allProjects = await commentModel.find();
		return NextResponse.json(allProjects);
	} catch (error) {
		return NextResponse.json(error, { status: 404 });
	}
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	try {
		const newComment = new commentModel(body);
		const comment = await newComment.save();
		return NextResponse.json(comment, { status: 200 });
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(error, { status: 400 });
	}
}
