"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { HTMLMotionProps, TargetAndTransition, Transition } from "motion/react";

export function TransitionContainer(props: React.ComponentProps<"div">) {
	const path = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div key={path} {...props} />
		</AnimatePresence>
	);
}

interface FadeUpProps extends HTMLMotionProps<"span"> {
	offset?: number;
	inView?: boolean;
	initial?: TargetAndTransition;
	animate?: TargetAndTransition;
	exit?: TargetAndTransition;
	transition?: Transition;
}

export function FadeUp({ offset = 70, initial, animate, transition, exit, inView, ...props }: FadeUpProps) {
	const transitionAnimate = { opacity: 1, y: 0, ...animate };

	return (
		<motion.span
			initial={{ opacity: 0, y: offset, ...initial }}
			animate={!inView && transitionAnimate}
			exit={{ opacity: 0, y: offset, ...exit }}
			transition={{ duration: 0.3, ...transition }}
			whileInView={inView ? transitionAnimate : undefined}
			{...props}
		/>
	);
}
