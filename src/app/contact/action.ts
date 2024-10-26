"use server";
import dbConnect from "@/database/connect";
import commentModel from "@/models/commentModel";

interface Data {
	comment: FormDataEntryValue;
	project?: FormDataEntryValue;
	name?: FormDataEntryValue;
	username?: FormDataEntryValue;
}

export async function action({ name, username, project, comment }: Data) {
	await dbConnect();

	const image = `https://cloud.appwrite.io/v1/avatars/initials?width=50&height=50&name=${name}`;
	const createComment = new commentModel({ name, image, project, comment });
	await createComment.save();
	return { error: false, message: `Thanks for your comment ${name}` };
}
