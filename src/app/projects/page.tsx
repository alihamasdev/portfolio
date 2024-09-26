"use client";
import { motion } from "framer-motion";
import { useTransition } from "@/hooks/transition";
import ProjectCard from "@/components/project-card";
import { projectsData } from "@/data/projects-data";

export default function Projects() {
	return (
		<section className="my-5 md:my-16">
			<motion.h1
				{...useTransition({})}
				className="text w-fit text-3xl font-bold text-zinc-50 md:text-4xl"
			>
				Projects
			</motion.h1>
			<div className="mt-6">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<ProjectCard projects={projectsData} />
				</div>
			</div>
		</section>
	);
}
