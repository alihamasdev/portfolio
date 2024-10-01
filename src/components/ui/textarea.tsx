import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[60px] w-full resize-none rounded-md border border-zinc-800 bg-transparent px-3 py-2 text-sm text-zinc-200 shadow-sm placeholder:text-zinc-400 focus:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };