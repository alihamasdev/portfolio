"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReadMore from "./ui/read-more";
import TechStack from "./ui/tech-stack";
import Transition from "@/lib/transitions";
import { AnimatePresence, motion } from "framer-motion";
import { type ProjectsDataType } from "@/data/projects-data";

export default function ProjectCard({ projects }: { projects: ProjectsDataType[] }) {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	return projects.map((item, index) => {
		return (
			<Transition
				key={item.slug}
				animation={{ name: "fade", delay: 0.3 + 0.1 * index }}
				className="group relative rounded-xl border border-zinc-800"
			>
				<Link
					href={"/projects/" + item.slug}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === index && (
							<motion.div
								initial={{ opacity: 0 }}
								layoutId="hoverBackground"
								animate={{ opacity: 1, transition: { duration: 0.15 } }}
								exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
								className="absolute inset-0 z-0 h-full w-full rounded-xl bg-zinc-800/60"
							/>
						)}
					</AnimatePresence>
					<div className="relative z-[1] overflow-hidden p-4">
						<Image
							src={item.image}
							alt={item.title}
							width={350}
							height={350}
							className="aspect-video rounded-md object-cover"
						/>
						<TechStack tech={item.techStack} className="mt-4" />
						<h2 className="mt-2 line-clamp-1 text-xl font-bold text-zinc-50 md:mt-3 md:text-[22px]">
							{item.title}
						</h2>
						<div className="mt-1.5 text-xs text-zinc-400 md:text-sm">
							<p className="line-clamp-4">{item.desc}</p>
							<span className="decoration-gradient -mt-0.5 [--scale-x:1] lg:[--scale-x:0] lg:group-hover:[--scale-x:1]">
								<ReadMore iconClass="md:!size-[10px] group-hover:ml-2" />
							</span>
						</div>
					</div>
				</Link>
			</Transition>
		);
	});
}
