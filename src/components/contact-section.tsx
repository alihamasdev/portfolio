"use client";
import { useState } from "react";
import Transition from "@/lib/transitions";
import { socialLinks } from "@/data/social-links";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSection() {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	return (
		<div className="mt-5 grid gap-y-4 rounded-lg">
			{socialLinks.map((item, index) => {
				return (
					<Transition key={item.name} animation={{ name: "fade", delay: 0.1 + 0.1 * index }}>
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative rounded-lg bg-zinc-900 md:rounded-xl"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<AnimatePresence>
								{hoveredIndex === index && (
									<Transition
										layoutId="contactHoverCards"
										animation={{ name: "hoverFade" }}
										className="rounded-lg border border-zinc-800 md:rounded-xl"
									/>
								)}
							</AnimatePresence>
							<div className="relative z-[1] flex items-center gap-x-3 px-3 py-2 md:gap-x-5 md:px-4 md:py-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-50 md:size-[52px]">
									<FontAwesomeIcon icon={item.icon} className="size-4 md:size-5" />
								</div>
								<div className="flex flex-col items-start">
									<h3 className="text-sm font-semibold text-zinc-100 md:text-base">{item.name}</h3>
									<p className="text-xs text-zinc-400 md:text-base">{item.tooltip}</p>
								</div>
							</div>
						</a>
					</Transition>
				);
			})}
		</div>
	);
}
