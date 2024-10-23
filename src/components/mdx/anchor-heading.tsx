"use client";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { FrameIcon } from "@radix-ui/react-icons";

interface PropsTypes extends React.ComponentProps<"h1"> {
	as?: "h1" | "h2" | "h3" | "h4";
}

export default function AnchorHeading({
	id,
	children,
	className,
	as = "h1",
	...props
}: PropsTypes) {
	const router = useRouter();
	const HeadingTag = as || "h1";
	return (
		<HeadingTag
			id={id} // add id from rehype-slug plugin for mdx components
			className={twMerge(
				"group relative my-5 w-fit scroll-m-5 font-bold text-zinc-100", // font-size styling is in `mdx.css`
				className
			)}
			{...props}
		>
			<button
				onClick={() => router.push("#" + id)} // add link with router to prevent nextjs loading bar
				className="absolute -left-8 top-1/2 flex size-6 min-w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-zinc-800 opacity-0 transition-all duration-300 md:group-hover:opacity-100"
			>
				<FrameIcon className="size-3.5 text-zinc-50" />
			</button>
			{children}
		</HeadingTag>
	);
}
