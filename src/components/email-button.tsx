"use client";

import { cn } from "cn";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { CONTACT } from "@/lib/contact";

export function CopyEmailButton() {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(CONTACT.email);
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 3000);
		} catch {
			window.location.assign(`mailto:${CONTACT.email}`);
		}
	};

	return (
		<button
			type="button"
			onClick={handleCopy}
			aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
			className="squircle group relative flex items-center justify-center gap-2 bg-fg px-4 py-2.5 text-sm font-medium text-bg shadow-sm transition-all hover:bg-fg/90 active:scale-95"
		>
			<span
				className={cn(
					"flex items-center gap-2 transition-all duration-300",
					copied ? "pointer-events-none scale-95 opacity-0 blur-xs" : "scale-100 opacity-100 blur-none",
				)}
			>
				<Copy className="size-4 opacity-80" />
				Copy my email
			</span>
			<span
				aria-hidden={!copied}
				className={cn(
					"absolute flex items-center gap-2 transition-all duration-300",
					copied ? "scale-100 opacity-100 blur-none" : "pointer-events-none scale-95 opacity-0 blur-xs",
				)}
			>
				<Check className="size-4 text-emerald-400" />
				Email copied!
			</span>
		</button>
	);
}
