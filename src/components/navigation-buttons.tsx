"use client";
import Link from "next/link";
import pages from "@/data/pages.json";
import Transition from "@/lib/transitions";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function NavigationButtons({ delay }: { delay: number }) {
	const path = usePathname();
	const currentPageIndex = pages.findIndex((item) => item.link === path);
	const previousPage = pages[currentPageIndex - 1];
	const nextPage = pages[currentPageIndex + 1] || pages[0];
	return (
		<section className="flex items-center justify-between py-14">
			{previousPage ? (
				<Transition animation={{ name: "fade", delay }}>
					<Link href={previousPage.link} className={buttonVariants({ variant: "outline" })}>
						<ChevronLeftIcon className="mr-1" />
						{previousPage.name}
					</Link>
				</Transition>
			) : (
				<div />
			)}
			<Transition animation={{ name: "fade", delay: delay + 0.1 }}>
				<Link href={nextPage.link} className={buttonVariants({ variant: "outline" })}>
					{nextPage.name}
					<ChevronRightIcon className="ml-1" />
				</Link>
			</Transition>
		</section>
	);
}
