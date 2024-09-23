"use client";
import { cloneElement } from "react";
import { motion } from "framer-motion";
import { useTransition } from "@/hooks/transition";
import IconCloud from "@/components/ui/icon-cloud";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	const socialLinks = [
		{ name: "Resume", icon: <FontAwesomeIcon icon={faFileLines} />, link: "/resume.pdf" },
		{
			name: "Github",
			icon: <FontAwesomeIcon icon={faGithub} />,
			link: "https://github.com/alihamasdev"
		},
		{
			name: "LinkedIn",
			icon: <FontAwesomeIcon icon={faLinkedin} />,
			link: "https:/linkedin.com/in/alihamasdev"
		}
	];
	return (
		<section className="flex min-h-dvh w-full flex-col items-center gap-y-10 py-28 md:flex-row">
			<div className="flex w-full flex-col items-start justify-center md:w-[70%]">
				<motion.p
					className="text-base font-medium text-zinc-200 md:text-lg"
					{...useTransition({ delay: 0 })}
				>
					Hello,
				</motion.p>
				<motion.h1
					className="text-3xl font-bold leading-tight md:mt-2 md:text-5xl"
					{...useTransition({ delay: 0.2 })}
				>
					I'm <span className="text-gradient">Ali Hamas</span> - Frontend Developer
				</motion.h1>
				<motion.p
					className="mt-2 text-sm text-zinc-300 md:mt-4 md:w-[85%] md:text-base"
					{...useTransition({ delay: 0.4 })}
				>
					A self-taught developer, who's currently pursuing a Full-Stack development to create
					stunning user experiences on the front-end, scalable, and secure infrastructure on the
					backend.
				</motion.p>
				<div className="mt-3 flex items-center gap-3 text-zinc-300 md:mt-5 md:gap-5">
					{socialLinks.map((item, index) => {
						return (
							<motion.a
								key={index}
								target="_blank"
								href={item.link}
								rel="noopener noreferrer"
								{...useTransition({ delay: 0.6 + 0.2 * index })}
								className="group-decoration flex flex-wrap items-center gap-1.5 *:transition-colors hover:text-zinc-50 md:hover:[--scale-x:1]"
							>
								{cloneElement(item.icon, { className: "h-[18px] md:h-5" })}
								<span className="decoration-gradient text-sm font-medium md:text-[15px]">
									{item.name}
								</span>
							</motion.a>
						);
					})}
				</div>
			</div>
			<div className="w-[80%] md:w-[30%]">
				<IconCloud />
			</div>
		</section>
	);
}
