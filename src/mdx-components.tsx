import { type MDXComponents } from "mdx/types";

import { CopyButton } from "@/components/ui/button/copy";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		pre: (props: React.ComponentProps<"pre">) => (
			<pre
				data-slot="code-block"
				className="bg-muted/50 relative flex max-h-[80dvh] w-full flex-col overflow-hidden rounded-xl border"
				{...props}
			/>
		),
		code: async ({ children, className }: { children: string; className?: string }) => {
			const isCodeBlock = !!className;

			if (!isCodeBlock) {
				return <code className="font-mono bg-muted rounded px-1 text-sm font-medium py-px">{children}</code>;
			}

			return (
				<div className="relative w-full flex-1 overflow-auto p-4 font-mono text-sm">
					{children}
					<CopyButton content={children} className="absolute top-2 right-2" />
				</div>
			);
		}
	};
}
