"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { blogs, pages, projects } from "@/data/pages-data";
import { useIsMobile } from "@/hooks/use-mobile";
import { RippleButton } from "@/components/ui/button/ripple";

interface NavItem {
	title: string;
	url: string;
}

export function PageNavigation() {
	const pathname = usePathname();
	const isMobile = useIsMobile();

	let navArray = pages;
	let directory: "app" | "projects" | "blogs" = "app";

	if (pathname.startsWith("/projects/") && pathname !== "/projects") {
		navArray = projects;
		directory = "projects";
	} else if (pathname.startsWith("/blogs/") && pathname !== "/blogs") {
		navArray = blogs;
		directory = "blogs";
	}

	const currentPageIndex = navArray.findIndex((page) => page.url === pathname);
	if (currentPageIndex === -1) return null;

	const isFirstPage = currentPageIndex === 0;
	const isLastPage = currentPageIndex === navArray.length - 1;

	let prevPage: NavItem | null = null;
	let nextPage: NavItem | null = null;

	if (isFirstPage) {
		if (directory === "projects") {
			prevPage = { title: "Projects", url: "/projects" };
		} else if (directory === "blogs") {
			prevPage = { title: "Blogs", url: "/blogs" };
		}
	} else {
		prevPage = navArray[currentPageIndex - 1];
	}

	if (isLastPage) {
		if (directory === "projects") {
			nextPage = pages[pages.findIndex((page) => page.url === "/blogs")];
		} else if (directory === "blogs") {
			nextPage = pages[pages.findIndex((page) => page.url === "/about")];
		} else {
			nextPage = navArray[0];
		}
	} else {
		nextPage = navArray[currentPageIndex + 1];
	}

	return (
		<div className="mt-auto flex w-full items-center justify-between py-8 peer-[.max-w-4xl]:max-w-4xl peer-[.mx-auto]:mx-auto">
			{prevPage ? (
				<Link href={prevPage.url} prefetch={false}>
					<RippleButton variant="outline">
						<ChevronLeft />
						{isMobile && directory !== "app" ? "Previous" : prevPage.title}
					</RippleButton>
				</Link>
			) : (
				<div />
			)}
			{nextPage && (
				<Link href={nextPage.url} prefetch={false}>
					<RippleButton variant="outline">
						{isMobile && directory !== "app" ? "Next" : nextPage.title}
						<ChevronRight />
					</RippleButton>
				</Link>
			)}
		</div>
	);
}
