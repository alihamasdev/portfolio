"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTransition } from "@/hooks/transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const path = usePathname();
	const [isHeader, setIsHeader] = useState(false);
	return (
		<>
			<button
				className="fixed right-5 top-5 z-20 flex size-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 transition-all hover:text-zinc-100 md:right-10 md:top-10 md:text-zinc-400 md:hover:ring-2 md:hover:ring-zinc-800"
				onClick={() => setIsHeader((prevState) => !prevState)}
			>
				{isHeader ? (
					<FontAwesomeIcon icon={faXmark} className="size-5" />
				) : (
					<FontAwesomeIcon icon={faBars} className="size-[18px]" />
				)}
			</button>
			{isHeader && (
				<header className="fixed inset-0 z-10 bg-zinc-950/75 backdrop-blur-md transition-colors duration-300">
					<nav className="*:decoration-gradient text-zic-300 flex size-full flex-col items-center justify-center gap-y-8 text-xl font-medium md:text-2xl">
						<motion.div
							{...useTransition({})}
							className={clsx(path === "/" && "text-gradient font-semibold")}
						>
							<Link href="/" onClick={() => setIsHeader(false)}>
								Home
							</Link>
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.1 })}
							className={clsx(path === "/about" && "text-gradient font-semibold")}
						>
							<Link href="/about" onClick={() => setIsHeader(false)}>
								About
							</Link>
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.2 })}
							className={clsx(path.includes("/projects") && "text-gradient font-semibold")}
						>
							<Link href={"/projects"} onClick={() => setIsHeader(false)}>
								Projects
							</Link>
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.3 })}
							className={clsx(path === "/contact" && "text-gradient font-semibold")}
						>
							<Link href="/contact" onClick={() => setIsHeader(false)}>
								Contact
							</Link>
						</motion.div>
					</nav>
				</header>
			)}
		</>
	);
}
