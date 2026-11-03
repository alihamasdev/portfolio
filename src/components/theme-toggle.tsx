"use client";

import { cn } from "cn";
import { MoonIcon, MonitorIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const mounted = useSyncExternalStore(
		() => () => {},
		() => true,
		() => false,
	);

	return (
		<div className="flex flex-col gap-1 border-t border-border/60 pt-2">
			<span className="px-2 text-[11px] font-semibold tracking-wider text-muted/70 uppercase">Theme</span>
			<div className="grid grid-cols-3 gap-1 rounded-xl bg-fg/4 p-1">
				<button
					type="button"
					onClick={() => setTheme("light")}
					className={cn(
						"flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all",
						mounted && theme === "light" ? "bg-surface text-fg shadow-xs" : "text-muted hover:text-fg",
					)}
				>
					<SunIcon className="size-3.5" />
					Light
				</button>
				<button
					type="button"
					onClick={() => setTheme("dark")}
					className={cn(
						"flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all",
						mounted && theme === "dark" ? "bg-surface text-fg shadow-xs" : "text-muted hover:text-fg",
					)}
				>
					<MoonIcon className="size-3.5" />
					Dark
				</button>
				<button
					type="button"
					onClick={() => setTheme("system")}
					className={cn(
						"flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all",
						mounted && theme === "system" ? "bg-surface text-fg shadow-xs" : "text-muted hover:text-fg",
					)}
				>
					<MonitorIcon className="size-3.5" />
					Auto
				</button>
			</div>
		</div>
	);
}
