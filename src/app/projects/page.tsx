"use client";
import Transition from "@/lib/transitions";
import { Input } from "@/components/ui/input";
import { useState, type ChangeEvent } from "react";
import Heading from "@/components/ui/page-heading";
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
			<Heading>Projects</Heading>
			<Transition animation={{ name: "fade", delay: 0.2 }} className="mt-5">
				<Input type="search" placeholder="Search projects..." onChange={handleSearch} />
			</Transition>
			<div className="mt-6">
				{filterProjects.length > 0 ? (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<ProjectCard projects={filterProjects} />
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
