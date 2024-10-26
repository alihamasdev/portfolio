import { Fragment } from "react";
import Transition from "@/lib/transitions";
import projects from "@/data/projects.json";
import Heading from "@/components/ui/page-heading";
import ProjectCard from "@/components/project-card";
import NavigationButtons from "@/components/navigation-buttons";

export default async function ProjectsPage() {
	return (
		<Fragment>
			<section className="pt-5 md:pt-20">
				<title>Projects - Developer Portfolio | Ali Hamas</title>
				<Heading>Projects</Heading>
				<Transition animation={{ name: "fade", delay: 0.1 }}>
					<p className="mt-2 text-xs leading-5 text-zinc-200 md:mt-4 md:text-base">
						Showcase of my work on web development
					</p>
				</Transition>
				<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<ProjectCard data={projects} />
				</div>
			</section>
			<NavigationButtons delay={projects.length * 0.1 + 0.2} />
		</Fragment>
	);
}
