"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/social-links";
import { AnimatePresence, motion } from "motion/react";
import { Portal } from "radix-ui";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Icon } from "@/components/ui/icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimateIcon } from "@/components/icons/icon";
import { MenuIcon } from "@/components/icons/menu";

const navLinks = [
	{ name: "Home", link: "/" },
	{ name: "Projects", link: "/projects" },
	{ name: "Blogs", link: "/blogs" },
	{ name: "About", link: "/about" },
	{ name: "Contact", link: "/contact" }
];

export function NavMenu() {
	const path = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<header className="fixed top-5 right-5 z-20 md:top-10 md:right-10">
				<motion.button
					whileTap={{ scale: 0.9 }}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
					onClick={() => setOpen((prevOpen) => !prevOpen)}
					className={cn(
						buttonVariants({ size: "icon", variant: "secondary", className: "[&_svg:not([class*='size-'])]:size-4.5" })
					)}
				>
					<AnimateIcon animate={open}>
						<MenuIcon />
					</AnimateIcon>
				</motion.button>
			</header>

			<Portal.Root>
				<AnimatePresence mode="wait" propagate>
					{open && (
						<motion.div
							initial={{ y: "100%" }}
							animate={{ y: 0, transition: { duration: 0.3 } }}
							exit={{ y: "-100%", transition: { duration: 0.3, delay: 1.1 } }}
							className="fixed inset-0 z-10 flex h-dvh w-full flex-col items-center justify-between bg-black/75 py-10 backdrop-blur-sm md:py-20"
						>
							<div />
							<ul className="flex flex-col gap-y-4">
								{navLinks.map(({ name, link }, index) => (
									<motion.li
										key={name}
										className="relative text-center"
										initial={{ opacity: 0, y: 70 }}
										animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 + 0.4 } }}
										exit={{ opacity: 0, y: -70, transition: { duration: 0.3, delay: index * 0.1 } }}
									>
										<Link
											href={link}
											onClick={() => setOpen(false)}
											className={cn("text-foreground text-lg font-semibold hover:[--scale-x:1] md:text-xl")}
										>
											{link === path ? (
												<GradientText>{name}</GradientText>
											) : (
												<span className="decoration-gradient">{name}</span>
											)}
										</Link>
									</motion.li>
								))}
							</ul>
							<div className="flex items-center gap-x-4">
								{socialLinks.map(({ name, icon, link, tooltip }, index) => (
									<Tooltip key={name}>
										<TooltipTrigger asChild>
											<motion.a
												href={link}
												target="_blank"
												className="group"
												rel="noopener noreferrer"
												onClick={() => setOpen(false)}
												initial={{ opacity: 0, y: 70 }}
												animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 + 0.9 } }}
												exit={{ opacity: 0, y: -70, transition: { duration: 0.3, delay: index * 0.1 + 0.5 } }}
											>
												<Icon src={icon} className="fill-foreground/80 group-hover:fill-foreground transition-colors" />
											</motion.a>
										</TooltipTrigger>
										<TooltipContent>{tooltip}</TooltipContent>
									</Tooltip>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</Portal.Root>
		</Fragment>
	);
}
