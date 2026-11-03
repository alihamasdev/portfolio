"use client";

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
			className="squircle group relative flex items-center justify-center gap-2 overflow-hidden bg-fg px-4 py-2.5 text-sm font-medium text-bg shadow-sm transition-[background-color,transform] duration-150 ease-spring hover:bg-fg/90 active:scale-[0.98]"
		>
			<span className="t-icon-swap" data-state={copied ? "b" : "a"}>
				<span className="t-icon" data-icon="a">
					<Copy className="size-4 opacity-80" />
				</span>
				<span className="t-icon" data-icon="b">
					<Check className="size-4 text-emerald-400" />
				</span>
			</span>

			<span className="t-text-swap" data-state={copied ? "b" : "a"}>
				<span data-text="a" aria-hidden={copied}>
					Copy my email
				</span>
				<span data-text="b" aria-hidden={!copied}>
					Email copied!
				</span>
			</span>
		</button>
	);
}
