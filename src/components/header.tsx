"use client";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTransition } from "@/hooks/transition";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const path = usePathname();
	const router = useRouter();
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
							onClick={() => {
								setIsHeader(false);
								router.push("/");
							}}
						>
							Home
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.1 })}
							className={clsx(path === "/about" && "text-gradient font-semibold")}
							onClick={() => {
								setIsHeader(false);
								router.push("/about");
							}}
						>
							About
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.2 })}
							className={clsx(path.includes("/projects") && "text-gradient font-semibold")}
							onClick={() => {
								setIsHeader(false);
								router.push("/projects");
							}}
						>
							Projects
						</motion.div>
						<motion.div
							{...useTransition({ delay: 0.3 })}
							className={clsx(path === "/contact" && "text-gradient font-semibold")}
							onClick={() => {
								setIsHeader(false);
								router.push("/contact");
							}}
						>
							Contact
						</motion.div>
					</nav>
				</header>
			)}
		</>
	);
}

{
	/* <header className="fixed left-1/2 top-3 flex h-12 w-[90%] -translate-x-1/2 items-center justify-center rounded-full border border-zinc-800 md:top-7 md:h-14 md:w-fit md:px-20">
	<nav className="*:decoration-gradient flex w-full items-center justify-evenly gap-x-0 text-sm font-semibold text-zinc-300 md:gap-x-7 md:text-base">
		<Link href="/" className="">
			Home
		</Link>
		<Link href="/about" className="">
			About
		</Link>
		<Link href="/projects" className="">
			Projects
		</Link>
		<Link href="/contact" className="">
			Contact
		</Link>
	</nav>
</header> */
}
