"use client";

import { motion, type HTMLMotionProps, type TargetAndTransition, type Transition } from "motion/react";

interface FadeUpProps extends HTMLMotionProps<"div"> {
	offset?: number;
	inView?: boolean;
	initial?: TargetAndTransition;
	animate?: TargetAndTransition;
	exit?: TargetAndTransition;
	transition?: Transition;
}

export function FadeUp({ offset = 70, inView = false, initial, animate, transition, ...props }: FadeUpProps) {
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
