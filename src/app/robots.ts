import type { MetadataRoute } from "next";

import { CONTACT } from "@/lib/contact";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${CONTACT.siteUrl}/sitemap.xml`,
	};
}
