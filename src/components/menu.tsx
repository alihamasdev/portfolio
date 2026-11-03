"use client";

import { cn } from "cn";
import { BriefcaseIcon, Code2Icon, FileTextIcon, HomeIcon, LayersIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { CONTACT } from "@/lib/contact";

export function Menu() {
	const menuRef = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setIsOpen((prev) => !prev);
			} else if (e.key === "Escape") {
				setIsOpen(false);
			}
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const scrollToSection = (id: string) => {
		const target = document.querySelector<HTMLElement>(`#${id}`);
		if (target) {
			const top = target.getBoundingClientRect().top + window.scrollY - 140;
			window.scrollTo({ top, behavior: "smooth" });
			setIsOpen(false);
		}
	};

	return (
		<div className="pointer-events-none fixed top-6 z-50 flex w-full justify-center px-4 sm:top-10">
			<div
				ref={menuRef}
				role="region"
				aria-label="Navigation Menu"
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
				className={cn(
					"pointer-events-auto w-full rounded-[1.6rem] bg-surface/90 ring-1 ring-border backdrop-blur-md transition-all duration-300 ease-out",
					isOpen ? "max-w-sm rounded-2xl shadow-2xl dark:shadow-stone-950/80" : "max-w-xs shadow-lg shadow-black/5",
				)}
			>
				{/* Header Pill */}
				<button
					type="button"
					aria-expanded={isOpen}
					onClick={() => setIsOpen((prev) => !prev)}
					className="flex w-full cursor-pointer items-center gap-3 p-2 text-left transition-colors"
				>
					<div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
						<Image src="/me.webp" alt={CONTACT.name} width={40} height={40} className="size-full object-cover" priority />
					</div>

					<div className="flex flex-1 flex-col justify-center overflow-hidden leading-tight">
						<span className="text-sm font-semibold tracking-tight text-fg">{CONTACT.role}</span>
						<div className="flex items-center gap-1.5 text-xs text-muted">
							<span className="relative flex size-2">
								<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
								<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
							</span>
							<span className="truncate">Available · Lahore / Remote</span>
						</div>
					</div>

					<span className="mr-2 hidden items-center rounded-md border border-border/80 px-1.5 py-0.5 text-[10px] font-medium text-muted sm:inline-flex">
						⌘ + K
					</span>
				</button>

				{/* Expanded Dropdown */}
				{isOpen && (
					<div className="animate-in fade-in-50 slide-in-from-top-2 flex flex-col gap-4 border-t border-border/70 p-3 pt-3 duration-200">
						<div className="flex flex-col gap-1">
							<span className="px-2 text-[11px] font-semibold tracking-wider text-muted/70 uppercase">Navigation</span>
							<button
								type="button"
								onClick={() => scrollToSection("hero")}
								className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-colors hover:bg-fg/5 hover:text-fg"
							>
								<HomeIcon className="size-4 text-muted" />
								<span>Home</span>
							</button>
							<button
								type="button"
								onClick={() => scrollToSection("experience")}
								className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-colors hover:bg-fg/5 hover:text-fg"
							>
								<BriefcaseIcon className="size-4 text-muted" />
								<span>Experience</span>
							</button>
							<button
								type="button"
								onClick={() => scrollToSection("projects")}
								className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-colors hover:bg-fg/5 hover:text-fg"
							>
								<LayersIcon className="size-4 text-muted" />
								<span>Projects</span>
							</button>
							<button
								type="button"
								onClick={() => scrollToSection("stack")}
								className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-colors hover:bg-fg/5 hover:text-fg"
							>
								<Code2Icon className="size-4 text-muted" />
								<span>Tech Stack</span>
							</button>
						</div>

						{/* Quick Links */}
						<div className="flex flex-col gap-1 border-t border-border/60 pt-2">
							<span className="px-2 text-[11px] font-semibold tracking-wider text-muted/70 uppercase">Resume</span>
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between rounded-xl px-2.5 py-1.5 text-sm text-fg/90 transition-colors hover:bg-fg/5 hover:text-fg"
							>
								<div className="flex items-center gap-2.5">
									<FileTextIcon className="size-4 text-muted" />
									<span>Resume</span>
								</div>
							</a>
						</div>

						<ThemeToggle />
					</div>
				)}
			</div>
		</div>
	);
}
