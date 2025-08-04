import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/lib/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavMenu } from "@/components/nav-menu";
import { PageNavigation } from "@/components/page-navigation";
import { ThemeToggler } from "@/components/theme-toggler";

import "@/styles/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Developer Portfolio | Ali Hamas",
	description: "Portfolio website to showcase web development projects"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body style={geistSans.style} className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					<TooltipProvider>
						<NavMenu />
						<main className="mx-auto w-full max-w-6xl px-4 md:px-0">
							{children}
							<PageNavigation />
						</main>
						<footer className="border-t py-5">
							<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 md:px-0">
								<p className="text-muted-foreground text-xs md:text-sm">
									&#169; 2025{" "}
									<a href="https://github.com/alihamasdev" target="_blank" className="decoration-gradient">
										Ali Hamas
									</a>
									, Inc.
								</p>
								<ThemeToggler />
							</div>
						</footer>
						<Toaster position="bottom-right" duration={4000} />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
