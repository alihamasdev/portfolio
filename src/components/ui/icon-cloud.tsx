"use client";
import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
	containerProps: {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			paddingTop: 40
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

const skills: string[] = [
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
	"figma",
	"vite",
	"wordpress",
	"elementor",
	"visualstudiocode",
	"express",
	"nodejs",
	"mongodb",
	"postgresql",
	"supabase",
	"typescript"
];
export default function IconCloud() {
	const [data, setData] = useState<IconData | null>(null);

	useEffect(() => {
		fetchSimpleIcons({ slugs: skills }).then(setData);
	}, []);

	const renderedIcons = useMemo(() => {
		if (!data) return null;

		return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon));
	}, [data]);

	// @ts-expect-error
	return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
