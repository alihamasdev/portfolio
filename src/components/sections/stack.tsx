import { Code2 } from "lucide-react";

import {
	DockerIcon,
	FigmaIcon,
	GitIcon,
	NextjsIcon,
	NodejsIcon,
	PostgresIcon,
	ReactIcon,
	SupabaseIcon,
	TailwindIcon,
	TanStackIcon,
	TypeScriptIcon,
	VitestIcon,
} from "@/components/icons";

type StackItem = {
	name: string;
	icon: React.ComponentType<React.ComponentProps<"svg">>;
};

const items: StackItem[] = [
	{ name: "TypeScript", icon: TypeScriptIcon },
	{ name: "React", icon: ReactIcon },
	{ name: "Next.js", icon: NextjsIcon },
	{ name: "TanStack", icon: TanStackIcon },
	{ name: "Tailwind CSS", icon: TailwindIcon },
	{ name: "Vitest", icon: VitestIcon },
	{ name: "Node.js", icon: NodejsIcon },
	{ name: "Postgres", icon: PostgresIcon },
	{ name: "Docker", icon: DockerIcon },
	{ name: "Supabase", icon: SupabaseIcon },
	{ name: "Figma", icon: FigmaIcon },
	{ name: "Git", icon: GitIcon },
];

export function Stack() {
	return (
		<section id="stack" className="section flex scroll-mt-24 flex-col gap-8">
			<div className="flex items-center gap-2.5">
				<Code2 className="size-5 stroke-[2.2px] text-fg" />
				<h2 className="text-xl font-semibold tracking-tight text-fg">Tech Stack</h2>
			</div>

			<ul className="group grid grid-cols-3 justify-center gap-y-4 sm:grid-cols-6">
				{items.map((item) => (
					<li key={item.name} className="group/item flex aspect-square flex-col items-center justify-center gap-3 hover:[&_svg]:scale-110">
						<item.icon
							className="size-10 transition-all duration-300 group-hover:grayscale group-hover/item:grayscale-0"
							aria-hidden="true"
						/>
						<span className="text-xs font-medium text-muted transition-colors group-hover/item:text-fg">{item.name}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
