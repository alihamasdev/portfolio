"use client";

import { cn } from "cn";
import { BriefcaseIcon, Code2Icon, FileTextIcon, HomeIcon, LayersIcon, MailIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { CONTACT } from "@/lib/contact";

function MenuStatus({ isPause }: { isPause: boolean }) {
	const [{ current, prev }, setState] = useState<{ current: number; prev: number | null }>({
		current: 0,
		prev: null,
	});
	const [isVisible, setIsVisible] = useState(true);

	const statuses = [
		{
			id: "available",
			content: (
				<>
					<span className="relative flex size-2 shrink-0">
						<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
						<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
					</span>
					<span className="truncate">Available for work</span>
				</>
			),
		},
		{
			id: "location",
			content: (
				<>
					<MapPinIcon className="size-3 shrink-0 text-muted" />
					<span className="truncate">Lahore, Pakistan · Remote</span>
				</>
			),
		},
		{
			id: "role",
			content: (
				<>
					<BriefcaseIcon className="size-3 shrink-0 text-muted" />
					<span className="truncate">Payment Systems & Frontend</span>
				</>
			),
		},
		{
			id: "email",
			content: (
				<>
					<MailIcon className="size-3 shrink-0 text-muted" />
					<span className="truncate">{CONTACT.email}</span>
				</>
			),
		},
	];

	useEffect(() => {
		const handleVisibilityChange = () => {
			setIsVisible(!document.hidden);
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
	}, []);

	useEffect(() => {
		if (isPause || !isVisible) return;
		const interval = setInterval(() => {
			setState(({ current }) => ({
				current: (current + 1) % statuses.length,
				prev: current,
			}));
		}, 4000);
		return () => clearInterval(interval);
	}, [isPause, isVisible, statuses.length]);

	useEffect(() => {
		if (prev === null) return;
		const timer = setTimeout(() => {
			setState((s) => ({ ...s, prev: null }));
		}, 550);
		return () => clearTimeout(timer);
	}, [prev]);

	return (
		<div className="relative h-4 w-full overflow-hidden text-xs text-muted">
			{prev !== null && (
				<div
					key={`prev-${prev}-${statuses[prev].id}`}
					aria-hidden="true"
					className="menu-status-item-exit pointer-events-none absolute inset-0 flex items-center gap-1.5"
				>
					{statuses[prev].content}
				</div>
			)}
			<div
				key={`curr-${current}-${statuses[current].id}`}
				className={cn("absolute inset-0 flex items-center gap-1.5", prev !== null && "menu-status-item-enter")}
			>
				{statuses[current].content}
			</div>
		</div>
	);
}

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
					"menu-intro pointer-events-auto w-full overflow-hidden rounded-[1.6rem] bg-surface/90 ring-1 ring-border backdrop-blur-md transition-all duration-200 ease-spring motion-reduce:transition-none",
					isOpen ? "max-w-sm rounded-2xl shadow-2xl dark:shadow-stone-950/80" : "max-w-xs shadow-lg shadow-black/5",
				)}
			>
				{/* Header Pill */}
				<button
					type="button"
					aria-expanded={isOpen}
					onClick={() => setIsOpen((prev) => !prev)}
					className="flex h-13 w-full cursor-pointer items-center overflow-hidden p-1.5 text-left transition-[background-color,transform] duration-150 ease-spring active:scale-[0.99]"
				>
					<div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
						<Image src="/me.webp" alt={CONTACT.name} width={40} height={40} className="size-full object-cover" priority />
					</div>

					<div className="menu-status-intro flex flex-1 items-center justify-between overflow-hidden pr-1.5 pl-2.5 whitespace-nowrap">
						<div className="flex flex-1 flex-col justify-center overflow-hidden leading-tight">
							<span className="text-sm font-semibold tracking-tight text-fg">{CONTACT.name}</span>
							<MenuStatus isPause={isOpen} />
						</div>

						<span className="mr-1 ml-2.5 hidden shrink-0 items-center rounded-md border border-border/80 px-1.5 py-0.5 text-[10px] font-medium text-muted sm:inline-flex">
							⌘ + K
						</span>
					</div>
				</button>

				{/* Expanded Dropdown */}
				<div
					className={cn(
						"grid transition-[grid-template-rows] duration-200 ease-spring motion-reduce:transition-none",
						isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
					)}
				>
					<div className="overflow-hidden">
						<div
							inert={!isOpen ? true : undefined}
							className={cn(
								"flex flex-col gap-4 border-t border-border/70 p-3 pt-3 transition-[opacity,transform] duration-200 ease-spring motion-reduce:transition-none",
								isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0",
							)}
						>
							<div className="flex flex-col gap-1">
								<span className="px-2 text-[11px] font-semibold tracking-wider text-muted/70 uppercase">Navigation</span>
								<button
									type="button"
									onClick={() => scrollToSection("hero")}
									className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.98]"
								>
									<HomeIcon className="size-4 text-muted" />
									<span>Home</span>
								</button>
								<button
									type="button"
									onClick={() => scrollToSection("experience")}
									className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.98]"
								>
									<BriefcaseIcon className="size-4 text-muted" />
									<span>Experience</span>
								</button>
								<button
									type="button"
									onClick={() => scrollToSection("projects")}
									className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.98]"
								>
									<LayersIcon className="size-4 text-muted" />
									<span>Projects</span>
								</button>
								<button
									type="button"
									onClick={() => scrollToSection("stack")}
									className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-fg/90 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.98]"
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
									className="flex items-center justify-between rounded-xl px-2.5 py-1.5 text-sm text-fg/90 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.98]"
								>
									<div className="flex items-center gap-2.5">
										<FileTextIcon className="size-4 text-muted" />
										<span>Resume</span>
									</div>
								</a>
							</div>

							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
