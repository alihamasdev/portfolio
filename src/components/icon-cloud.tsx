"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
	containerProps: {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%"
		}
	},
	options: {
		reverse: false,
		depth: 1,
		wheelZoom: false,
		imageScale: 2,
		activeCursor: "default",
		tooltip: "native",
		initial: [0.1, -0.1],
		clickToFront: 500,
		tooltipDelay: 0,
		outlineColour: "#0000",
		maxSpeed: 0.04,
		minSpeed: 0.02,
		dragControl: true
	},
	id: "IconCloudId"
};

export const renderCustomIcon = (icon: SimpleIcon) => {
	const bgHex = "#080510";
	const fallbackHex = "#ffffff";
	const minContrastRatio = 2;

	return renderSimpleIcon({
		icon,
		bgHex,
		fallbackHex,
		minContrastRatio,
		size: 42,
		aProps: {
			href: undefined,
			target: undefined,
			rel: undefined,
			onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault()
		}
	});
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const skills = [
	"javascript",
	"appwrite",
	"nextdotjs",
	"react",
	"html5",
	"css3",
	"tailwindcss",
	"firebase",
	"vercel",
	"git",
	"github",
	"vite",
	"mongodb",
	"postgresql",
	"supabase",
	"typescript",
	"prisma",
	"shadcnui",
	"nodedotjs",
	"bun",
	"npm"
];

export function IconCloud() {
	const [data, setData] = useState<IconData | null>(null);

	useEffect(() => {
		fetchSimpleIcons({ slugs: skills }).then(setData);
	}, []);

	const renderedIcons = useMemo(() => {
		if (!data) return null;

		return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon));
	}, [data]);

	return (
		<motion.div
			className="px-6 md:px-0"
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.7 } }}
		>
			<Cloud {...cloudProps}>{renderedIcons}</Cloud>
		</motion.div>
	);
}
