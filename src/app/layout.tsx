import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
	title: "Developer Portfolio | Ali Hamas",
	description: "Portfolio website to showcase web development projects"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-black text-zinc-50">
				<NextTopLoader color="#f472b6" showSpinner={false} height={5} />
				<AnimatePresence mode="wait">
					<TooltipProvider>
						<Header />
						<main className="mx-auto w-[90%] max-w-6xl">{children}</main>
						<Toaster position="bottom-right" toastOptions={{ className: "text-sm font-medium" }} />
					</TooltipProvider>
				</AnimatePresence>
			</body>
		</html>
	);
}
