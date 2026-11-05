import type { MetadataRoute } from "next";

import { CONTACT } from "@/lib/contact";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: CONTACT.siteUrl,
			lastModified: new Date("2026-11-05"),
		},
	];
}
