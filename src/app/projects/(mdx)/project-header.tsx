"use client";

import Image from "next/image";
import { notFound, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

import { projects } from "@/data/pages-data";
import { Icon } from "@/components/ui/icon";
import { FadeUp } from "@/components/transitions";

export function ProjectHeader() {
	const path = usePathname();
	const project = projects.find(({ url }) => url === path);

	if (!project) {
		return notFound();
	}

	return (
		<>
			<FadeUp transition={{ delay: 0.2 }}>
				<Image
					width={896}
					height={504}
					placeholder="blur"
					src={project.image}
					alt={project.title}
					className="aspect-video w-full rounded-xl"
				/>
			</FadeUp>
			<FadeUp transition={{ delay: 0.4 }}>
				<h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
			</FadeUp>
			<div className="text-muted-foreground mt-2 flex items-center gap-x-6">
				<FadeUp transition={{ delay: 0.6 }}>
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-x-2 font-medium hover:[--scale-x:1]"
					>
						<Icon src="github" className="fill-muted-foreground group-hover:fill-foreground size-4.5" />
						<p className="decoration-gradient group-hover:text-foreground">Repository</p>
					</a>
				</FadeUp>
				<FadeUp transition={{ delay: 0.8 }}>
					<a
						href={project.live}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-x-2 hover:[--scale-x:1]"
					>
						<Globe className="text-muted-foreground group-hover:text-foreground size-4.5" />
						<p className="decoration-gradient group-hover:text-foreground">Live Site</p>
					</a>
				</FadeUp>
			</div>
			<div className="mt-3 w-full border-t" />
		</>
	);
}
