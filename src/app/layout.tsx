import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";

import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
	title: "Developer Portfolio | Ali Hamas",
	description: "Portfolio website to showcase web development projects"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-black text-zinc-50">
				<AnimatePresence mode="wait">
					<TooltipProvider>
						<Header />
						<main className="mx-auto w-[90%] max-w-6xl">{children}</main>
					</TooltipProvider>
				</AnimatePresence>
			</body>
		</html>
	);
}
