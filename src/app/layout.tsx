import "../styles/globals.css";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";

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
				<TooltipProvider>
					<main className="mx-auto w-[90%] max-w-6xl">{children}</main>
				</TooltipProvider>
			</body>
		</html>
	);
}
