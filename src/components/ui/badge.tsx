import * as React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
	"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-zinc-800",
	{
		variants: {
			variant: {
				default: "border-transparent shadow bg-zinc-50 text-zinc-900 hover:bg-zinc-50/80",
				secondary: "border-transparent bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80",
				destructive: "border-transparent bg-red-900 text-zinc-50 hover:bg-red-900/80",
				outline: "text-zinc-50"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={twMerge(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
