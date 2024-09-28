"use client";
import { motion } from "framer-motion";
import type { HTMLMotionProps, MotionProps } from "framer-motion";

interface PropsTypes extends HTMLMotionProps<"div">, MotionProps {
	animation?: {
		name: "fade";
		x?: number | string;
		y?: number | string;
		delay?: number;
		duration?: number;
		exitDelay?: number;
		exitDuration?: number;
		applyAt?: "animate" | "whileInView";
	};
}

export default function Transition({ animation, children, ...props }: PropsTypes) {
	const y = animation?.y || 70;
	const x = animation?.x || 0;
	const delay = animation?.delay || 0;
	const duration = animation?.duration || 0.3;
	const exitDelay = animation?.exitDelay || 0.1;
	const applyAt = animation?.applyAt || "animate";
	const exitDuration = animation?.exitDuration || duration;

	if (animation?.name === "fade") {
		const animateStyles = { opacity: 1, y: 0, x: 0, transition: { delay, duration } };

		props.initial = { opacity: 0, y, x };
		props.animate = applyAt === "animate" && animateStyles;
		props.whileInView = applyAt === "whileInView" ? animateStyles : {};
		props.exit = { opacity: 0, y, x, transition: { delay: exitDelay, duration: exitDuration } };
	}

	return <motion.div {...props}>{children}</motion.div>;
}
