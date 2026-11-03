import { type Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";

import { BlurGradient } from "@/components/blur-gradient";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { CONTACT } from "@/lib/contact";
import "@/styles/globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const newsreader = Newsreader({
	subsets: ["latin"],
	style: ["normal", "italic"],
	variable: "--font-newsreader",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(CONTACT.siteUrl),
	title: `${CONTACT.name} · ${CONTACT.role}`,
	description: `${CONTACT.name}, ${CONTACT.role} based in ${CONTACT.location}. Specializing in payment infrastructure, component systems, and resilient web applications.`,
	keywords: ["Ali Hamas", "Full Stack Engineer", "React Developer", "Next.js", "TypeScript", "Safepay", "Fintech", "Lahore", "Pakistan"],
	authors: [{ name: CONTACT.name, url: CONTACT.siteUrl }],
	creator: CONTACT.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className={`${inter.variable} ${newsreader.variable}`}>
			<body className="flex min-h-dvh cursor-default flex-col items-center bg-bg pt-28 font-sans font-medium text-fg antialiased selection:bg-fg/10 sm:pt-36">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Menu />
					<BlurGradient />
					<main className="flex w-full max-w-[min(calc(100vw-4rem),40rem)] flex-col px-2">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
