"use client";

import { motion, type Transition } from "motion/react";
import { Slot as SlotPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

interface GradientTextProps extends React.ComponentProps<"h1"> {
	gradient?: string;
	transition?: Transition;
	asChild?: boolean;
}

function GradientText({
	className,
	gradient = `linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #d96570 50%, #a855f7 80%, #3b82f6 100%)`,
	transition = { duration: 50, repeat: Infinity, ease: "linear" },
	asChild = false,
	children,
	...props
}: GradientTextProps) {
	const Comp = asChild ? SlotPrimitive.Slot : "h1";

	return (
		<Comp data-slot="gradient-text" className={cn("relative text-4xl font-bold", className)} {...props}>
			<motion.span
				className="bg-[length:700%_100%] bg-clip-text bg-[position:0%_0%] text-transparent"
				style={{ backgroundImage: gradient }}
				initial={{ backgroundPosition: "0% 0%" }}
				animate={{ backgroundPosition: "500% 100%" }}
				transition={transition}
			>
				{children}
			</motion.span>
		</Comp>
	);
}

export { GradientText, type GradientTextProps };
