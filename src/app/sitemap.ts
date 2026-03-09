import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://alihamas.pk";

	const routes = [
		"",
		"/about",
		"/contact",
		"/projects",
		"/projects/chaty",
		"/projects/cricket-stats",
		"/projects/image-cropper",
		"/projects/itab",
		"/projects/scorecard-generator",
		"/projects/todo",
		"/projects/twitter-clone"
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: route === "" ? 1 : 0.8
	}));
}
