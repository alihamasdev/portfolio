"use client";

import Image from "next/image";
import { notFound, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

import { projects } from "@/data/pages-data";
import { Icon } from "@/components/ui/icon";

export function ProjectHeader({ children }: { children?: React.ReactNode }) {
	const path = usePathname();
	const project = projects.find(({ url }) => url === path);

	if (!project) {
		return notFound();
	}

	return (
		<>
			<div className="bg-muted aspect-video w-full overflow-hidden rounded-xl">
				<Image
					width={896}
					height={504}
					placeholder="blur"
					src={project.image}
					alt={project.title}
					className="aspect-video w-full"
				/>
			</div>
			<h1 className="mt-4 text-3xl font-bold">{project.title}</h1>
			<div className="text-muted-foreground mt-2 flex items-center gap-x-6">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-x-2 hover:[--scale-x:1]"
				>
					<Icon src="github" className="fill-muted-foreground group-hover:fill-foreground size-4" />
					<p className="decoration-gradient group-hover:text-foreground text-sm font-medium">Repository</p>
				</a>
				<a
					href={project.live}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-x-2 hover:[--scale-x:1]"
				>
					<Globe className="text-muted-foreground group-hover:text-foreground size-4" />
					<p className="decoration-gradient group-hover:text-foreground text-sm font-medium">Live Site</p>
				</a>
			</div>
			<div className="my-3 w-full border-t" />
			<div className="prose w-full">{children}</div>
		</>
	);
}
