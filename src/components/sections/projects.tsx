import { ArrowUpRight, FolderGit2 } from "lucide-react";

import { GithubIcon, RawaPayLogo, SafepayLogo, ZyvornLogo } from "@/components/icons";
import { CONTACT } from "@/lib/contact";

type Project = {
	title: string;
	tagline: string;
	description: string;
	badge: string;
	liveUrl?: `https://${string}.alihamas.pk`;
	repoUrl: `https://github.com/alihamasdev/${string}`;
	tech: string[];
	icon: React.ReactNode;
};

const projects: Project[] = [
	{
		title: "Safepay Docs",
		tagline: "Documentation & API Explorer",
		description:
			"Interactive AI ready developer documentation, Model Context Protocol (MCP) server and API explorer engine built specifically for Safepay's OpenAPI spec.",
		badge: "Documentation",
		liveUrl: "https://safepay.alihamas.pk",
		repoUrl: "https://github.com/alihamasdev/safepay-docs",
		tech: ["Next.js", "TypeScript", "OpenAPI"],
		icon: (
			<div className="flex size-14 items-center justify-center rounded-2xl bg-[#183b8c]/10 text-[#183b8c] shadow-md dark:bg-blue-500/15 dark:text-blue-400">
				<SafepayLogo className="size-7" />
			</div>
		),
	},
	{
		title: "Zyvorn",
		tagline: "E-Commerce & Checkout UX",
		description:
			"Production-grade e-commerce application featuring seamless checkout flow, cart state management, and merchant inventory tools.",
		badge: "Live Store",
		liveUrl: "https://zyvorn.alihamas.pk",
		repoUrl: "https://github.com/alihamasdev/zyvorn.pk",
		tech: ["Next.js", "Convex", "Turborepo", "TypeScript", "Tailwind CSS"],
		icon: (
			<div className="flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 shadow-md dark:text-amber-400">
				<ZyvornLogo className="size-7" />
			</div>
		),
	},
	{
		title: "RawaPay",
		tagline: "Pakistani Payment Rail SDK",
		description: "Unified Node.js & TypeScript SDK for Pakistani payment gateways (JazzCash & Easypaisa) with HMAC signature validation.",
		badge: "Open Source SDK",
		repoUrl: "https://github.com/alihamasdev/rawapay",
		tech: ["TypeScript", "HMAC-SHA256", "Turborepo"],
		icon: (
			<div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-md dark:text-emerald-400">
				<RawaPayLogo className="size-7" />
			</div>
		),
	},
];

export function Projects() {
	return (
		<section id="projects" className="section flex scroll-mt-24 flex-col gap-8">
			<div className="flex items-center gap-3">
				<FolderGit2 className="size-5 text-fg" strokeWidth={2} />
				<h2 className="text-xl font-semibold tracking-tight text-fg">Featured Projects</h2>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				{projects.map((project) => (
					<div
						key={project.title}
						className="squircle group relative flex flex-col justify-between overflow-hidden bg-fg/2 p-6 ring-1 ring-border/50 transition-all hover:bg-fg/4 hover:shadow-lg hover:shadow-black/5"
					>
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between">
								<span className="rounded-full bg-fg/6 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-fg">{project.badge}</span>
								<div className="flex items-center gap-1.5">
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${project.title} live link`}
											className="flex size-8 items-center justify-center rounded-lg text-muted transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/8 hover:text-fg active:scale-[0.92]"
										>
											<ArrowUpRight className="size-4" />
										</a>
									)}
									<a
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${project.title} GitHub repository`}
										className="flex size-8 items-center justify-center rounded-lg text-muted transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/8 hover:text-fg active:scale-[0.92]"
									>
										<GithubIcon className="size-3.5" />
									</a>
								</div>
							</div>

							<div className="flex items-center gap-4 pt-1">
								{project.icon}
								<div className="flex flex-col">
									<h3 className="text-base font-semibold tracking-tight text-fg">{project.title}</h3>
									<span className="text-xs font-medium text-muted">{project.tagline}</span>
								</div>
							</div>

							<p className="text-sm leading-relaxed text-pretty text-muted">{project.description}</p>
						</div>

						<div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
							{project.tech.map((t) => (
								<span key={t} className="rounded-md bg-fg/4 px-2 py-0.5 text-[10px] font-medium text-muted/90">
									{t}
								</span>
							))}
						</div>
					</div>
				))}

				{/* 4th Card: See All on GitHub */}
				<a
					href={CONTACT.github}
					target="_blank"
					rel="noopener noreferrer"
					className="squircle group flex min-h-55 flex-col items-center justify-center gap-4 bg-fg/2 p-6 text-center ring-1 ring-border/50 transition-[background-color,color,transform] duration-200 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.99]"
				>
					<div className="flex size-14 items-center justify-center rounded-2xl bg-fg/5 text-muted transition-[color,transform] duration-200 ease-spring group-hover:scale-105 group-hover:text-fg motion-reduce:transform-none">
						<GithubIcon className="size-7" />
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-sm font-semibold text-fg">See all repositories</span>
						<span className="text-xs text-muted">Browse open-source contributions & experiments on GitHub</span>
					</div>
					<span className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors duration-150 group-hover:text-fg">
						github.com/alihamasdev{" "}
						<ArrowUpRight className="size-3 transition-transform duration-150 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
					</span>
				</a>
			</div>
		</section>
	);
}
