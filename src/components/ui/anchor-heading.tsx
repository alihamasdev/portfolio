"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AnchorHeading({
	children,
	className
}: {
	children: string;
	className?: string;
}) {
	const router = useRouter();
	const id = children.toLowerCase().split(" ").join("-");
	return (
		<h2
			id={id}
			onClick={() => router.push("#" + id)}
			className={cn(
				"group relative mb-2 block w-fit cursor-pointer scroll-m-6 text-xl font-semibold text-zinc-100 md:text-2xl",
				className
			)}
		>
			<div className="absolute -left-8 top-1/2 flex h-7 w-[26px] -translate-y-1/2 items-center justify-center rounded-md bg-zinc-800 opacity-0 transition-all duration-300 group-hover:opacity-100">
				<FontAwesomeIcon icon={faHashtag} className="size-4 text-zinc-50" />
			</div>
			{children}
		</h2>
	);
}
