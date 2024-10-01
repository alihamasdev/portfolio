"use client";
import Transition from "@/lib/transitions";
import projects from "@/data/projects.json";
import { Input } from "@/components/ui/input";
import { type ProjectType } from "@/data/types";
import { useState, type ChangeEvent } from "react";
import Heading from "@/components/ui/page-heading";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
	const [filterProjects, setFilterProjects] = useState<ProjectType[] | []>(projects);
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		let queryProjects = projects.filter((item) => item.title.toLowerCase().includes(query));
		setFilterProjects(queryProjects);
	};
	return (
		<section className="my-5 md:my-16">
			<Heading>Projects</Heading>
			<Transition animation={{ name: "fade", delay: 0.2 }} className="mt-5">
				<Input type="search" placeholder="Search projects..." onChange={handleSearch} />
			</Transition>
			<div className="mt-6">
				{filterProjects.length > 0 ? (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<ProjectCard data={projects} />
					</div>
				) : (
					<Transition animation={{ name: "fade", delay: 0.2 }}>
						<p className="mt-20 text-center text-xl font-medium">No project found</p>
					</Transition>
				)}
			</div>
		</section>
	);
}
