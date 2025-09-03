import { type NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug]
	}
});

export default withMDX(nextConfig);
