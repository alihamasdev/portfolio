import { type Metadata, type Viewport } from "next";
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

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fafaf9" },
		{ media: "(prefers-color-scheme: dark)", color: "#1c1917" },
	],
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(CONTACT.siteUrl),
	title: `${CONTACT.name} · ${CONTACT.role}`,
	description: `${CONTACT.name}, ${CONTACT.role} based in ${CONTACT.location}. Specializing in payment infrastructure, component systems, and resilient web applications.`,
	keywords: ["Ali Hamas", "Full Stack Engineer", "React Developer", "Next.js", "TypeScript", "Safepay", "Fintech", "Lahore", "Pakistan"],
	authors: [{ name: CONTACT.name, url: CONTACT.siteUrl }],
	creator: CONTACT.name,
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: CONTACT.siteUrl,
		title: `${CONTACT.name} · ${CONTACT.role}`,
		description: `${CONTACT.name}, ${CONTACT.role} based in ${CONTACT.location}. Specializing in payment infrastructure, component systems, and resilient web applications.`,
		siteName: `${CONTACT.name} · ${CONTACT.role}`,
	},
	twitter: {
		card: "summary_large_image",
		title: `${CONTACT.name} · ${CONTACT.role}`,
		description: `${CONTACT.name}, ${CONTACT.role} based in ${CONTACT.location}. Specializing in payment infrastructure, component systems, and resilient web applications.`,
		creator: CONTACT.twitterHandle,
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${CONTACT.siteUrl}/#person`,
			name: CONTACT.name,
			givenName: "Ali",
			familyName: "Hamas",
			url: CONTACT.siteUrl,
			image: `${CONTACT.siteUrl}/opengraph-image.jpg`,
			jobTitle: CONTACT.role,
			description: `${CONTACT.name}, ${CONTACT.role} based in ${CONTACT.location}. Specializing in payment infrastructure, component systems, and resilient web applications.`,
			email: `mailto:${CONTACT.email}`,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Lahore",
				addressCountry: "PK",
			},
			sameAs: [CONTACT.github, CONTACT.linkedin, CONTACT.x],
			knowsAbout: ["Payment Systems", "Fintech Infrastructure", "React", "Next.js", "TypeScript", "Tailwind CSS", "Full Stack Development"],
		},
		{
			"@type": "ProfilePage",
			"@id": `${CONTACT.siteUrl}/#profilepage`,
			url: CONTACT.siteUrl,
			name: `${CONTACT.name} · ${CONTACT.role}`,
			isPartOf: {
				"@type": "WebSite",
				"@id": `${CONTACT.siteUrl}/#website`,
				url: CONTACT.siteUrl,
				name: `${CONTACT.name} · ${CONTACT.role}`,
			},
			mainEntity: {
				"@id": `${CONTACT.siteUrl}/#person`,
			},
		},
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className={`${inter.variable} ${newsreader.variable}`}>
			<head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
			</head>
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
