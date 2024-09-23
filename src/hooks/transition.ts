import type { MotionProps, Transition } from "framer-motion";

type SetTransition = Pick<MotionProps, "initial" | "whileInView" | "exit">;
// type TransitionType = "spring" | "tween" | "inertia";
type setTransitionProps = { delay?: number; distance?: number; duration?: number };

export function useTransition({
	delay = 0,
	distance = 50,
	duration = 0.3
}: setTransitionProps): SetTransition {
	return {
		initial: { opacity: 0, y: distance },
		whileInView: { opacity: 1, y: 0, transition: { delay, duration } },
		exit: { opacity: 0, y: distance, transition: { delay, duration } }
	};
}
