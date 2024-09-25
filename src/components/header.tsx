"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/social-links";
import { useTransition } from "@/hooks/transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Header() {
	const path = usePathname();
	const [isHeader, setIsHeader] = useState(false);

	return (
		<>
			<motion.div {...useTransition({})} className="fixed right-5 top-5 z-20 md:right-10 md:top-10">
				<Button
					size="icon"
					variant="outline"
					onClick={() => setIsHeader((prevState) => !prevState)}
				>
					{isHeader ? (
						<FontAwesomeIcon icon={faXmark} className="size-[17px]" />
					) : (
						<FontAwesomeIcon icon={faBars} className="size-[15px]" />
					)}
				</Button>
			</motion.div>
			{isHeader && (
				<header className="fixed inset-0 z-10 bg-zinc-950/75 backdrop-blur-md transition-colors duration-300">
					<nav className="text-zic-300 relative flex size-full flex-col items-center justify-center gap-y-8 text-xl font-medium md:text-2xl">
						<motion.div
							{...useTransition({})}
							className={clsx("decoration-gradient", path === "/" && "text-gradient font-semibold")}
						>
							<Link href="/" onClick={() => setIsHeader(false)}>
								Home
							</Link>
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.1 })}
							className={clsx(
								"decoration-gradient",
								path === "/about" && "text-gradient font-semibold"
							)}
						>
							<Link href="/about" onClick={() => setIsHeader(false)}>
								About
							</Link>
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.2 })}
							className={clsx(
								"decoration-gradient",
								path.includes("/projects") && "text-gradient font-semibold"
							)}
						>
							<Link href={"/projects"} onClick={() => setIsHeader(false)}>
								Projects
							</Link>
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.3 })}
							className={clsx(
								"decoration-gradient",
								path === "/contact" && "text-gradient font-semibold"
							)}
						>
							<Link href="/contact" onClick={() => setIsHeader(false)}>
								Contact
							</Link>
						</motion.div>
						<div className="absolute bottom-16 flex items-center gap-x-4">
							{socialLinks.map((item, index) => {
								return (
									<motion.div key={index} {...useTransition({ delay: 0.4 + 0.1 * index })}>
										<Tooltip>
											<TooltipTrigger>
												<a target="_blank" href={item.link} rel="noopener noreferrer">
													<FontAwesomeIcon
														icon={item.icon}
														className="size-5 text-zinc-400 transition-colors hover:text-zinc-50"
													/>
												</a>
											</TooltipTrigger>
											<TooltipContent>{item.tooltip}</TooltipContent>
										</Tooltip>
									</motion.div>
								);
							})}
						</div>
					</nav>
				</header>
			)}
		</>
	);
}
