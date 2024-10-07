import Link from "next/link";
import Transition from "@/lib/transitions";
import { type ProjectType } from "@/models/types";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default async function NavigationButtons({ slug }: { slug: string }) {
	const request = await fetch(process.env.DOMAIN! + "/api/projects", { cache: "force-cache" });
	const projects: ProjectType[] = await request.json();

	const currentPageIndex = projects.findIndex((item) => item.slug === slug);
	const previousPage = projects[currentPageIndex - 1] || projects[projects.length - 1];
	const nextPage = projects[currentPageIndex + 1] || projects[0];
	return (
		<section className="flex items-center justify-between py-14">
			<Transition animation={{ name: "fade", delay: 0.2 }}>
				<Link href={previousPage.slug} className={buttonVariants({ variant: "outline" })}>
					<ChevronLeftIcon className="mr-1" />
					{previousPage.title}
				</Link>
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.3 }}>
				<Link href="/projects" className={buttonVariants({ variant: "secondary" })}>
					All Projects
				</Link>
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.4 }}>
				<Link href={nextPage.slug} className={buttonVariants({ variant: "outline" })}>
					{nextPage.title}
					<ChevronRightIcon className="ml-1" />
				</Link>
			</Transition>
		</section>
	);
}
