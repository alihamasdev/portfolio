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

interface FadeUpProps extends HTMLMotionProps<"div"> {
	offset?: number;
	inView?: boolean;
	initial?: TargetAndTransition;
	animate?: TargetAndTransition;
	exit?: TargetAndTransition;
	transition?: Transition;
}

export function FadeUp({ offset = 70, inView = false, initial, animate, transition, exit, ...props }: FadeUpProps) {
	return (
		<motion.div
			data-slot="fade-up-transition"
			data-delay={transition?.delay}
			initial={{ opacity: 0, y: offset, ...initial }}
			animate={!inView && { opacity: 1, y: 0, ...animate }}
			transition={{ duration: 0.3, ...transition }}
			whileInView={inView ? { opacity: 1, y: 0, ...animate } : undefined}
			{...props}
		/>
	);
}
