import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimatePresence } from "motion/react";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@/lib/theme-provider";
import { Toaster } from "@/components/ui/sonner";

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
					<NextTopLoader color="#f472b6" showSpinner={false} height={5} />
					<AnimatePresence mode="wait">{children}</AnimatePresence>
					<Toaster position="bottom-right" duration={4000} />
				</ThemeProvider>
			</body>
		</html>
	);
}
