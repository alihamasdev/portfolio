"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Transition from "@/lib/transitions";
import { AnimatePresence } from "framer-motion";
import { type commentType } from "@/models/types";
import { badgeVariants } from "@/components/ui/badge";

interface PropTypes {
	badge?: boolean;
	comments: commentType[];
}

const dateFormat = (input: Date | number): string => {
	const date = new Date(input);
	const year = date.getFullYear();
	const day = date.getDate();
	const month = new Intl.DateTimeFormat("en-gb", { month: "short" }).format(date);
	return `${month} ${day}, ${year}`;
};

export default function CommentCard({ comments, badge = true }: PropTypes) {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	return comments.map((item, index) => {
		return (
			<Transition
				key={index}
				onMouseEnter={() => setHoveredIndex(index)}
				onMouseLeave={() => setHoveredIndex(null)}
				className="relative rounded-xl border border-zinc-800 px-3 py-2 md:p-4"
				animation={{ name: "fade", delay: 0.1 + 0.1 * index }}
			>
				<AnimatePresence mode="wait">
					{hoveredIndex === index && (
						<Transition
							className="rounded-xl"
							layoutId="commentHoverCards"
							animation={{ name: "hoverFade" }}
						/>
					)}
				</AnimatePresence>
				<div className="relative z-[1] flex items-start gap-x-3">
					<div className="min-h-10 min-w-10">
						{item?.username ? (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={"https://github.com/" + item.username}
							>
								<Image
									src={item.image}
									width={50}
									height={50}
									alt={item.name}
									className="mt-1 size-10 rounded-full"
								/>
							</a>
						) : (
							<Image
								src={item.image}
								width={50}
								height={50}
								alt={item.name}
								className="mt-1 size-10 rounded-full"
							/>
						)}
					</div>
					<div className="flex w-full flex-col">
						<div className="flex w-full items-center gap-x-2">
							{item?.username ? (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={"https://github.com/" + item.username}
									className="decoration-gradient line-clamp-1 text-base font-bold text-zinc-100"
								>
									{item.name}
								</a>
							) : (
								<p className="line-clamp-1 text-base font-bold text-zinc-100">{item.name}</p>
							)}
							<span className="line-clamp-1 text-sm font-medium leading-6 text-zinc-400">
								{dateFormat(item.createdAt)}
							</span>
							{badge && item.project && (
								<Link
									href={`/projects/${item.project}`}
									className={clsx(
										badgeVariants({ variant: "secondary" }),
										"w-fit whitespace-nowrap"
									)}
								>
									{item.project}
								</Link>
							)}
						</div>
						<p className="mt-1 text-sm text-zinc-300">{item.comment}</p>
					</div>
				</div>
			</Transition>
		);
	});
}
