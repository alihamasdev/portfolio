import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Ali Hamas · Full Stack Engineer",
		short_name: "Ali Hamas",
		description: "Full Stack Engineer specializing in payment infrastructure, component systems, and resilient web applications.",
		start_url: "/",
		display: "standalone",
		background_color: "#fafaf9",
		theme_color: "#fafaf9",
		icons: [
			{
				src: "/me.webp",
				sizes: "any",
				type: "image/webp",
			},
		],
	};
}
