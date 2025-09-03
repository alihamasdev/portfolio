import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/pages-data";
import { Icon } from "@/components/ui/icon";
import { PageDescription, PageTitle } from "@/components/ui/page-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MotionHighlight } from "@/components/motion-highlight";
import { FadeUp } from "@/components/transitions";

export default function ProjectsPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<PageTitle>Projects</PageTitle>
			<PageDescription>Showcase of my work on web development</PageDescription>
			<MotionHighlight
				mode="parent"
				hover={true}
				containerClassName="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{projects.map(({ title, url, image, techStack, description }, index) => (
					<FadeUp key={title} data-value={title} transition={{ delay: index * 0.2 + 0.6 }}>
						<Link href={url} className="block rounded-xl border p-4">
							<Image
								src={image}
								width={500}
								height={281}
								placeholder="blur"
								alt={`${title} image`}
								className="aspect-video w-full rounded-md"
							/>
							<div className="mt-3 flex items-center gap-x-2">
								{techStack.map((tech) => (
									<Tooltip key={tech}>
										<TooltipTrigger>
											<Icon src={tech} className="size-5" />
										</TooltipTrigger>
										<TooltipContent arrow>
											<span className="capitalize">{tech}</span>
										</TooltipContent>
									</Tooltip>
								))}
							</div>
							<h2 className="mt-2 text-xl font-bold">{title}</h2>
							<p className="text-muted-foreground line-clamp-3 text-sm">{description}</p>
						</Link>
					</FadeUp>
				))}
			</MotionHighlight>
		</div>
	);
}
