import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com"
			},
			{
				protocol: "https",
				hostname: "cloud.appwrite.io"
			}
		]
	}
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: "one-dark-pro" }]]
	}
});

export default withMDX(nextConfig);
