import * as React from "react";
import { twMerge } from "tailwind-merge";

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={twMerge(
				"flex min-h-[60px] w-full resize-none rounded-md border border-zinc-800 bg-transparent px-3 py-2 text-sm text-zinc-200 shadow-sm placeholder:text-zinc-400 focus:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
