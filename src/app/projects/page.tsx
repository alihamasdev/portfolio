import Transition from "@/lib/transitions";
import { type ProjectType } from "@/models/types";
import Heading from "@/components/ui/page-heading";
import ProjectCard from "@/components/project-card";

export default async function ProjectsPage() {
	const response = await fetch(process.env.DOMAIN + "/api/projects", {
		cache: "force-cache"
	});
	const projects: ProjectType[] = await response.json();
	return (
		<section className="py-5 md:py-20">
			<title>Projects - Developer Portfolio | Ali Hamas</title>
			<Heading>Projects</Heading>
			<Transition animation={{ name: "fade", delay: 0.2 }}>
				<p className="mt-2 text-xs leading-5 text-zinc-200 md:mt-4 md:text-base">
					Showcase of my work on web development
				</p>
			</Transition>
			<div className="mt-6">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<ProjectCard data={projects} />
				</div>
			</div>
		</section>
	);
}
