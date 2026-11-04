import { Briefcase } from "lucide-react";

type Role = {
	period: string;
	role: string;
};

type Bullet = {
	text: string;
	tooltip?: string;
};

type ExperienceItem = {
	name: string;
	roles: Role[];
	bullets: Bullet[];
	stack: string[];
};

const experiences: ExperienceItem[] = [
	{
		name: "Rankpilot",
		roles: [{ role: "Full-Stack Developer", period: "May 2025 - Jul 2026 · Remote" }],
		bullets: [
			{
				text: "Built customer-facing dashboard and rich-text editing workflows using React, TanStack Query, and Tiptap, cutting content production friction.",
			},
			{
				text: "Engineered OAuth integrations and automated synchronization for active merchant stores across Shopify and WordPress.",
			},
			{
				text: "Implemented Stripe subscription billing flows, webhooks, and customer analytics views with type-safe schemas.",
				tooltip: "Handled full subscription lifecycles, automated invoice generation, and tier upgrade/downgrade logic.",
			},
			{
				text: "Optimized application rendering performance and data table state management.",
				tooltip: "Achieved sub-second dashboard load times and zero cumulative layout shift (CLS) across data-heavy views.",
			},
		],
		stack: ["React", "TypeScript", "Express.js", "Node.js", "TanStack Query", "Stripe", "MongoDB", "Tailwind CSS"],
	},
	{
		name: "FOGO",
		roles: [{ role: "Frontend Developer", period: "Nov 2024 - Dec 2024 · Freelance" }],
		bullets: [
			{
				text: "Architected administrative dashboard UI with Next.js and shadcn/ui based on high-fidelity Figma specifications.",
			},
			{
				text: "Developed modular, type-safe data tables with server-side pagination, sorting, and dynamic multi-criteria filtering.",
				tooltip: "Standardized table and filter primitives deployed across 15+ operational administration views.",
			},
			{
				text: "Translated Figma design tokens into pixel-perfect, accessible, and responsive components adhering to WCAG standards.",
			},
		],
		stack: ["Next.js", "TypeScript", "TanStack Query", "Axios", "Tailwind CSS", "shadcn/ui", "Figma"],
	},
];

export function Experience() {
	return (
		<section id="experience" className="section flex scroll-mt-24 flex-col gap-8">
			<div className="flex items-center gap-3">
				<Briefcase className="size-5 text-fg" strokeWidth={2} />
				<h2 className="text-xl font-semibold tracking-tight text-fg">Experience</h2>
			</div>

			<ul className="flex flex-col gap-10">
				{experiences.map((experience) => (
					<li key={experience.name} className="flex flex-col gap-3">
						<div className="flex flex-col gap-0.5">
							<p className="text-xs font-medium tracking-wide text-muted">{experience.roles[0].period}</p>
							<h3 className="text-lg font-semibold text-fg">
								{experience.roles[0].role} <span className="font-normal text-muted/60">at</span>{" "}
								<span className="text-fg">{experience.name}</span>
							</h3>
						</div>

						<ul className="mt-1 flex list-[circle] flex-col gap-2 pl-4 text-sm leading-relaxed text-pretty text-muted">
							{experience.bullets.map((bullet, idx) => (
								<li key={idx}>
									{bullet.tooltip ? (
										<span
											tabIndex={0}
											className="t-tt-trigger group relative inline cursor-help underline decoration-fg/25 decoration-dashed underline-offset-4 focus:outline-none"
										>
											{bullet.text}
											<span role="tooltip" className="t-tt squircle">
												<span className="t-tt-text leading-snug">{bullet.tooltip}</span>
											</span>
										</span>
									) : (
										bullet.text
									)}
								</li>
							))}
						</ul>

						<div className="mt-2 flex flex-wrap gap-1.5">
							{experience.stack.map((tech) => (
								<span key={tech} className="rounded-md bg-fg/4 px-2 py-0.5 text-[11px] font-medium text-muted ring-1 ring-border/50">
									{tech}
								</span>
							))}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
