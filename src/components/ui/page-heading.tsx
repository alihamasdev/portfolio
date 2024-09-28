import { cn } from "@/lib/utils";
import Transition from "@/lib/transitions";
import type { HTMLAttributes } from "react";
import type { TransitionPropsTypes } from "@/lib/transitions";

type PropsTypes = HTMLAttributes<"h1"> & TransitionPropsTypes;

export default function Heading({ children, className, animation, ...props }: PropsTypes) {
	return (
		<h1 className={cn("text-3xl font-bold text-zinc-50 md:text-[42px]", className)}>
			<Transition animation={{ name: "fade", ...animation }} {...props}>
				{children}
			</Transition>
		</h1>
	);
}
