"use client";

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

	const activeTheme = mounted ? (theme ?? "system") : "system";

	return (
		<div className="flex flex-col gap-1 border-t border-border/60 pt-2">
			<span className="px-2 text-[11px] font-semibold tracking-wider text-muted/70 uppercase">Theme</span>
			<div
				className="t-tabs w-full"
				role="tablist"
				aria-label="Theme selection"
				data-mounted={mounted ? "true" : "false"}
				data-active={activeTheme}
			>
				<span className="t-tabs-pill" aria-hidden="true" />

				<button type="button" role="tab" aria-selected={mounted && theme === "light"} onClick={() => setTheme("light")} className="t-tab">
					<SunIcon className="size-3.5" />
					Light
				</button>
				<button type="button" role="tab" aria-selected={mounted && theme === "dark"} onClick={() => setTheme("dark")} className="t-tab">
					<MoonIcon className="size-3.5" />
					Dark
				</button>
				<button type="button" role="tab" aria-selected={mounted && theme === "system"} onClick={() => setTheme("system")} className="t-tab">
					<MonitorIcon className="size-3.5" />
					Auto
				</button>
			</div>
		</div>
	);
}
