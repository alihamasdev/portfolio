import ReactIcon from "react-inlinesvg";

import { cn } from "@/lib/utils";

interface IconProps extends React.ComponentProps<typeof ReactIcon> {
	src: IconId;
}

const icons = ["email", "file", "github", "linkedin", "twitter"] as const;
type IconId = (typeof icons)[number];

function Icon({ src, className, ...props }: IconProps) {
	return <ReactIcon src={`/icons/${src}.svg`} className={cn("size-5 fill-foreground", className)} {...props} />;
}

export { Icon, type IconProps, type IconId };
