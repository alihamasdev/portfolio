"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import TechStack from "./tech-stack";
import Transition from "@/lib/transitions";
import { AnimatePresence } from "framer-motion";
import { type ProjectType } from "@/data/types";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface PropsTypes {
	data: ProjectType[];
}

export default function ProjectCard({ data }: PropsTypes) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	return data.map((project, index) => {
		return (
			<Transition
				key={project.slug}
				animation={{ name: "fade", delay: 0.2 + 0.1 * index }}
				className="group relative rounded-xl border border-zinc-800"
			>
				<Link
					href={`/projects/${project.slug}`}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === index && (
							<Transition
								className="rounded-xl"
								layoutId="projectHoverCards"
								animation={{ name: "hoverFade" }}
							/>
						)}
					</AnimatePresence>
					<div className="relative z-[1] overflow-hidden p-4">
						<Image
							src={project.image}
							alt={project.title}
							placeholder="blur"
							className="aspect-video w-full rounded-md object-cover"
						/>
						<TechStack tech={project.techStack} className="mt-4" />
						<h2 className="mt-2 line-clamp-1 text-xl font-bold text-zinc-50 md:mt-3 md:text-[22px]">
							{project.title}
						</h2>
						<div className="mt-1.5 text-xs text-zinc-400 md:text-sm">
							<p className="line-clamp-4">{project.desc}</p>
							<div className="decoration-gradient -mt-0.5 inline-flex items-center lg:group-hover:[--scale-x:1]">
								<span>read more</span>
								<ChevronRightIcon className="mt-0.5 size-4 transition-all duration-300 group-hover:ml-2" />
							</div>
						</div>
					</div>
				</Link>
			</Transition>
		);
	});
}
