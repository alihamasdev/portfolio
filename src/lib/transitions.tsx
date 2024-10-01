"use client";
import { cn } from "./utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps, MotionProps } from "framer-motion";

export interface TransitionPropsTypes extends HTMLMotionProps<"div">, MotionProps {
	animation?: {
		name?: "fade" | "hoverFade";
		x?: number | string;
		y?: number | string;
		delay?: number;
		duration?: number;
		exitDelay?: number;
		exitDuration?: number;
	};
}

export default function Transition({
	animation = {},
	className,
	children,
	initial,
	animate,
	exit,
	...props
}: TransitionPropsTypes) {
	const {
		name,
		x = 0,
		y = 70,
		delay = 0,
		duration = 0.3,
		exitDuration = 0.1,
		exitDelay = duration
	} = animation;

	if (name === "fade") {
		initial = { opacity: 0, y, x };
		animate = { opacity: 1, y: 0, x: 0, transition: { delay, duration } };
		exit = { opacity: 0, y, x, transition: { delay: exitDelay, duration: exitDuration } };
	}
	if (name === "hoverFade") {
		initial = { opacity: 0 };
		animate = { opacity: 1, transition: { duration: 0.15 } };
		exit = { opacity: 0, transition: { duration: 0.15, delay: 0.2 } };
		className = cn("absolute inset-0 z-0 size-full bg-zinc-900", className);
	}

	return (
		<motion.div initial={initial} animate={animate} exit={exit} className={className} {...props}>
			{children}
		</motion.div>
	);
}
