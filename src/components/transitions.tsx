"use client";

import { motion, type HTMLMotionProps, type TargetAndTransition } from "motion/react";

interface FadeUpProps extends HTMLMotionProps<"span"> {
	offset?: number;
	initial?: TargetAndTransition;
	animate?: TargetAndTransition;
	tranistion?: TargetAndTransition;
}

export function FadeUp({ offset = 70, initial, animate, tranistion, ...props }: FadeUpProps) {
	return (
		<motion.span
			initial={{ opacity: 0, x: 0, y: offset, ...initial }}
			animate={{ opacity: 1, x: 0, y: 0, ...animate }}
			transition={{ duration: 0.3, ...tranistion }}
			{...props}
		/>
	);
}
