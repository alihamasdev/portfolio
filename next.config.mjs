import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: "one-dark-pro" }]]
	}
});

export default withMDX(nextConfig);
