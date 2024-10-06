"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Icon from "react-inlinesvg";
import { Button } from "./ui/button";
import Transition from "@/lib/transitions";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/social-links";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Header() {
	const path = usePathname();
	const [isHeader, setIsHeader] = useState(false);

	const navLinks = [
		{ name: "Home", link: "/" },
		{ name: "Projects", link: "/projects" },
		{ name: "About", link: "/about" },
		{ name: "Contact", link: "/contact" }
	];

	return (
		<header>
			<Transition
				animation={{ name: "fade", x: 100, y: 1 }}
				className="fixed right-5 top-5 z-20 md:right-10 md:top-10"
			>
				<Button
					size="icon"
					variant="secondary"
					onClick={() => setIsHeader((prevState) => !prevState)}
				>
					{isHeader ? (
						<Cross2Icon className="size-[17px]" />
					) : (
						<HamburgerMenuIcon className="size-[15px]" />
					)}
				</Button>
			</Transition>
			<AnimatePresence mode="wait">
				{isHeader && (
					<motion.section
						initial={{ y: "100%" }}
						animate={{ y: 0, transition: { duration: 0.3 } }}
						exit={{ y: "100%", transition: { duration: 0.3, delay: 0.2 } }}
						className="fixed inset-0 z-10 border-b border-b-zinc-800 bg-zinc-950/75 backdrop-blur-md transition-colors duration-300"
					>
						<nav className="flex min-h-dvh w-full flex-col items-center justify-between py-14">
							<section />
							<section className="text-zic-300 flex size-full flex-col items-center justify-center gap-y-8 text-xl font-medium md:text-2xl">
								{navLinks.map((item, index) => {
									return (
										<Transition
											key={item.name}
											onClick={() => setIsHeader((prevState) => !prevState)}
											animation={{ name: "fade", delay: 0.3 + 0.1 * index, exitDelay: 0.1 }}
											className={clsx(
												"decoration-gradient",
												path === item.link && "text-gradient font-semibold",
												item.link === "/projects" &&
													path.includes("/projects") &&
													"text-gradient font-semibold"
											)}
										>
											<Link href={item.link}>{item.name}</Link>
										</Transition>
									);
								})}
							</section>
							<section>
								<div className="flex items-center gap-x-4">
									{socialLinks.map((item, index) => {
										return (
											<Transition
												key={item.name}
												className="text-zinc-400 hover:text-zinc-50"
												animation={{ name: "fade", delay: 0.7 + 0.05 * index, exitDelay: 0.1 }}
											>
												<Tooltip>
													<TooltipTrigger>
														<a target="_blank" href={item.link} rel="noopener noreferrer">
															<Icon
																src={item.icon}
																className="size-5 fill-zinc-400 transition-colors hover:fill-zinc-50"
															/>
														</a>
													</TooltipTrigger>
													<TooltipContent sideOffset={12}>{item.tooltip}</TooltipContent>
												</Tooltip>
											</Transition>
										);
									})}
								</div>
							</section>
						</nav>
					</motion.section>
				)}
			</AnimatePresence>
		</header>
	);
}
