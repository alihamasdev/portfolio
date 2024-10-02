import mongoose from "mongoose";

export default async function dbConnect() {
	if (mongoose.connection.readyState >= 1) return;

	try {
		mongoose.connect(process.env.MONGO_DB_URL_STRING!);
		const connection = mongoose.connection;
		connection.on("connected", () => {
			console.log("MongoDb connected");
		});
		connection.on("error", (error) => {
			console.log("Database connection error", error);
			process.exit();
		});
	} catch (error) {
		console.log("Database error", error);
	}
}
