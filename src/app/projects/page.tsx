"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useState, type ChangeEvent } from "react";
import { useTransition } from "@/hooks/transition";
import ProjectCard from "@/components/project-card";
import { projectsData, type ProjectsDataType } from "@/data/projects-data";

export default function Projects() {
	const [filterProjects, setFilterProjects] = useState<ProjectsDataType[] | []>(projectsData);
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		let queryProjects = projectsData.filter((item) => item.title.toLowerCase().includes(query));
		setFilterProjects(queryProjects);
	};
	return (
		<section className="my-5 md:my-16">
			<motion.h1
				{...useTransition({})}
				className="text w-fit text-3xl font-bold text-zinc-50 md:text-4xl"
			>
				Projects
			</motion.h1>
			<motion.div {...useTransition({ delay: 0.1 })} className="mt-5">
				<Input type="search" placeholder="Search projects..." onChange={handleSearch} />
			</motion.div>
			<div className="mt-6">
				{filterProjects.length > 0 ? (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<ProjectCard projects={filterProjects} />
					</div>
				) : (
					<motion.div {...useTransition({})} className="mt-20 text-center text-xl font-medium">
						No project found
					</motion.div>
				)}
			</div>
		</section>
	);
}
