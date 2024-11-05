"use client";
import Link from "next/link";
import pages from "@/data/pages.json";
import Transition from "@/lib/transitions";
import projects from "@/data/projects";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface NavigationProps {
	delay: number;
	isPage?: boolean; // check wether its app directory page or projects page
}

interface Page {
	title: string;
	slug: string;
}

export default function NavigationButtons({ delay, isPage = true }: NavigationProps) {
	const usePath = usePathname();
	const path = isPage ? usePath : usePath.slice(10);
	const currentRoute = isPage ? pages : projects;
	const currentPageIndex = currentRoute.findIndex((item) => item.slug === path);

	return (
		<section className="flex items-center justify-between py-14">
			{currentRoute[currentPageIndex - 1] ? (
				<PreviousButton delay={delay} page={currentRoute[currentPageIndex - 1]} />
			) : (
				<div />
			)}
			<NextButton
				delay={delay + 0.1}
				page={currentRoute[currentPageIndex + 1] || currentRoute[0]}
			/>
		</section>
	);
}

function PreviousButton({ delay, page }: { delay: number; page: Page }) {
	return (
		<Transition animation={{ name: "fade", delay }}>
			<Link href={page.slug} className={buttonVariants({ variant: "outline" })}>
				<ChevronLeftIcon className="mr-1" />
				{page.title}
			</Link>
		</Transition>
	);
}

function NextButton({ delay, page }: { delay: number; page: Page }) {
	return (
		<Transition animation={{ name: "fade", delay: delay + 0.1 }}>
			<Link href={page.slug} className={buttonVariants({ variant: "outline" })}>
				{page.title}
				<ChevronRightIcon className="ml-1" />
			</Link>
		</Transition>
	);
}
