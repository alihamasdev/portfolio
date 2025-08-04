import ReactIcon from "react-inlinesvg";

import { cn } from "@/lib/utils";

interface IconProps extends React.ComponentProps<"svg"> {
	src: IconId;
}

const icons = [
	"email",
	"file",
	"github",
	"linkedin",
	"twitter",
	"appwrite",
	"firebase",
	"mongodb",
	"nextjs",
	"react",
	"shadcn",
	"supabase",
	"tailwindcss",
	"typescript",
	"prisma",
	"vercel",
	"bun"
] as const;

type IconId = (typeof icons)[number];

function Icon({ src, className, ...props }: IconProps) {
	return (
		<svg
			width="256"
			height="256"
			fill="none"
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("size-5", className)}
			{...props}
		>
			<ReactIcon src={`/icons/${src}.svg`} />
		</svg>
	);
}

export { Icon, icons as iconsList, type IconProps, type IconId };
