import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Ali Hamas | Frontend Developer Portfolio",
		short_name: "Ali Hamas",
		description:
			"A self-taught developer creating stunning user experiences on the front-end and scalable infrastructure on the back-end.",
		start_url: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon"
			}
		]
	};
}
