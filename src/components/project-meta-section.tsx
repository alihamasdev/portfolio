import Image from "next/image";
import { type ProjectType } from "@/models/types";
import { Link2Icon, GitHubLogoIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export default function ProjectMetaSection({ data }: { data: ProjectType }) {
	const links = [
		{ icon: <GitHubLogoIcon className="w-3 md:w-4" />, title: "Repository", link: data.repository },
		{ icon: <Link2Icon className="w-3 md:w-4" />, title: "Live Site", link: data.link }
	];

	return (
		<section className="w-full">
			<Image
				priority
				width={896}
				height={504}
				quality={100}
				src={data.image}
				alt={data.title}
				className="mx-auto aspect-video w-full rounded-lg bg-zinc-800 object-cover"
			/>
			<h1 className="mt-3 text-2xl font-extrabold text-zinc-50 md:mt-5 md:!text-[42px]">
				{data.title}
			</h1>
			<span className="mt-3 block text-base text-zinc-300">{`Written on ${data.date} by Ali Hamas`}</span>
			<div className="mt-2 flex flex-wrap items-center gap-x-4 text-xs text-zinc-300 md:gap-x-6 md:text-base">
				<div className="flex items-center gap-x-1 md:gap-x-2">
					<EyeOpenIcon className="w-3 md:w-4" />
					<span>{`${data.views} views`}</span>
				</div>
				{links.map((item) => {
					return (
						<a
							href={item.link}
							key={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-x-1 *:transition-colors hover:text-zinc-50 hover:[--scale-x:1] md:gap-x-2"
						>
							{item.icon}
							<span className="decoration-gradient">{item.title}</span>
						</a>
					);
				})}
			</div>
			<hr />
		</section>
	);
}
