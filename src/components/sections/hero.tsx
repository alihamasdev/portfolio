import { FileText } from "lucide-react";

import { CopyEmailButton } from "@/components/email-button";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { CONTACT } from "@/lib/contact";

export function Hero() {
	return (
		<section id="hero" className="section relative flex flex-col gap-8 pt-4">
			<div className="flex items-center gap-2.5">
				<h1 className="font-newsreader text-3xl tracking-tight text-balance text-fg italic sm:text-4xl">{CONTACT.name}</h1>
			</div>

			<div className="flex flex-col gap-4 text-base leading-relaxed text-pretty text-muted/95">
				<p>
					👋 Hey! I&apos;m a <strong className="font-semibold text-fg">{CONTACT.role}</strong> specializing in payment infrastructure,
					design systems, and resilient web applications. Based in <strong className="font-semibold text-fg">{CONTACT.location} 🇵🇰</strong>,
					I work <strong className="font-semibold text-fg">remotely</strong>.
				</p>
				<p>
					I help startups and scaleups turn complex digital flows into solid, accessible, and polished products. I care deeply about{" "}
					<strong className="font-semibold text-fg">developer experience</strong>,{" "}
					<strong className="font-semibold text-fg">payment reliability</strong>, and refining every{" "}
					<strong className="font-semibold text-fg">interaction</strong>.
				</p>
				<p>
					Deeply focused on the Pakistani fintech ecosystem, building modern <strong className="font-semibold text-fg">payment SDKs</strong>{" "}
					and <strong className="font-semibold text-fg">AI-ready developer documentation</strong>.
				</p>
			</div>

			<div className="flex flex-wrap items-center gap-3">
				<CopyEmailButton />

				<a
					href={CONTACT.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub Profile"
					className="squircle flex size-10 items-center justify-center bg-fg/4 text-muted ring-1 ring-border/50 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/8 hover:text-fg active:scale-[0.97]"
				>
					<GithubIcon className="size-4" />
				</a>

				<a
					href={CONTACT.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn Profile"
					className="squircle flex size-10 items-center justify-center bg-fg/4 text-muted ring-1 ring-border/50 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/8 hover:text-fg active:scale-[0.97]"
				>
					<LinkedinIcon className="size-4" />
				</a>

				<a
					href={CONTACT.x}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="X Profile"
					className="squircle flex size-10 items-center justify-center bg-fg/4 text-muted ring-1 ring-border/50 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/8 hover:text-fg active:scale-[0.97]"
				>
					<XIcon className="size-4" />
				</a>

				<a
					href={CONTACT.resumeUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Download Resume PDF"
					className="squircle flex h-10 items-center gap-2 bg-fg/4 px-3.5 py-2.5 text-xs font-semibold text-muted ring-1 ring-border/50 transition-[background-color,color,transform] duration-150 ease-spring hover:bg-fg/8 hover:text-fg active:scale-[0.97]"
				>
					<FileText className="size-4" />
					<span>Resume</span>
				</a>
			</div>
		</section>
	);
}
