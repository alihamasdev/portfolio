import { FileTextIcon } from "lucide-react";

import { GithubIcon } from "@/components/icons";
import { CONTACT } from "@/lib/contact";

export function Footer() {
	return (
		<footer className="section flex flex-col items-center gap-4 pt-20 pb-12 text-sm text-muted">
			<div className="flex items-center gap-6">
				<a
					href="https://github.com/alihamasdev/portfolio"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-xs underline decoration-fg/20 underline-offset-4 transition-colors hover:text-fg sm:text-sm"
				>
					<GithubIcon className="size-4" />
					<span>Source code</span>
				</a>
				<span className="text-muted/40">•</span>
				<a
					href={CONTACT.resumeUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-xs underline decoration-fg/20 underline-offset-4 transition-colors hover:text-fg sm:text-sm"
				>
					<FileTextIcon className="size-4" />
					<span>Resume</span>
				</a>
			</div>

			<span className="text-center text-xs text-balance text-muted/80">© Copyright 2026 — All rights reserved, {CONTACT.name}</span>
		</footer>
	);
}
