import { Code2 } from "lucide-react";

import {
	BetterAuthIcon,
	ConvexIcon,
	DockerIcon,
	ExpoIcon,
	FigmaIcon,
	MongoDBIcon,
	NextjsIcon,
	NodejsIcon,
	PostgresIcon,
	PrismaIcon,
	ReactIcon,
	SupabaseIcon,
	TailwindIcon,
	TanStackIcon,
	TRPCIcon,
	TurborepoIcon,
	TypeScriptIcon,
	VercelIcon,
} from "@/components/icons";

type StackItem = {
	name: string;
	icon: React.ComponentType<React.ComponentProps<"svg">>;
};

const items: StackItem[] = [
	{ name: "React", icon: ReactIcon },
	{ name: "Next.js", icon: NextjsIcon },
	{ name: "TypeScript", icon: TypeScriptIcon },
	{ name: "Tailwind CSS", icon: TailwindIcon },
	{ name: "TanStack", icon: TanStackIcon },
	{ name: "Expo", icon: ExpoIcon },
	{ name: "Node.js", icon: NodejsIcon },
	{ name: "tRPC", icon: TRPCIcon },
	{ name: "Better Auth", icon: BetterAuthIcon },
	{ name: "Convex", icon: ConvexIcon },
	{ name: "Postgres", icon: PostgresIcon },
	{ name: "Supabase", icon: SupabaseIcon },
	{ name: "Prisma", icon: PrismaIcon },
	{ name: "MongoDB", icon: MongoDBIcon },
	{ name: "Docker", icon: DockerIcon },
	{ name: "Turborepo", icon: TurborepoIcon },
	{ name: "Vercel", icon: VercelIcon },
	{ name: "Figma", icon: FigmaIcon },
];

export function Stack() {
	return (
		<section id="stack" className="section flex scroll-mt-24 flex-col gap-8">
			<div className="flex items-center gap-3">
				<Code2 className="size-5 text-fg" strokeWidth={2} />
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
