import { cn } from "@/lib/utils";
import Transition from "@/lib/transitions";
import type { HTMLAttributes } from "react";

export default function Heading({ children, className }: HTMLAttributes<"h1">) {
	return (
		<h1 className={cn("text-4xl font-bold text-zinc-50 md:text-4xl", className)}>
			<Transition animation={{ name: "fade" }}>{children}</Transition>
		</h1>
	);
}
