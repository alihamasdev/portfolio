import Anchor from "./components/mdx/anchor";
import type { MDXComponents } from "mdx/types";
import CodeBlock from "./components/mdx/code-block";
import AnchorHeading from "./components/mdx/anchor-heading";

// All components styling are in `mdx.css` file

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ children, href }) => <Anchor href={href}>{children}</Anchor>,
		pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
		h1: ({ children, ...props }) => (
			<AnchorHeading as="h1" {...props}>
				{children}
			</AnchorHeading>
		),
		h2: ({ children, ...props }) => (
			<AnchorHeading as="h2" {...props}>
				{children}
			</AnchorHeading>
		),
		h3: ({ children, ...props }) => (
			<AnchorHeading as="h3" {...props}>
				{children}
			</AnchorHeading>
		),
		h4: ({ children, ...props }) => (
			<AnchorHeading as="h4" {...props}>
				{children}
			</AnchorHeading>
		),
		...components
	};
}
