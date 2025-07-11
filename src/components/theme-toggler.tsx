"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
	const { setTheme } = useTheme();

	return (
		<div className="flex items-center rounded-full border p-0.5">
			<div
				onClick={() => setTheme("light")}
				className="bg-muted cursor-pointer rounded-full p-1 transition-colors dark:bg-transparent"
			>
				<SunMedium className="dark:text-muted-foreground text-foreground size-3.5" />
			</div>
			<div
				onClick={() => setTheme("dark")}
				className="dark:bg-muted cursor-pointer rounded-full bg-transparent p-1 transition-colors"
			>
				<MoonStar className="text-muted-foreground dark:text-foreground size-3.5" />
			</div>
		</div>
	);
}
