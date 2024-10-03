import Image from "next/image";
import Transition from "@/lib/transitions";
import { type ProjectType } from "@/models/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectMetaSection({ data }: { data: ProjectType }) {
	const links = [
		{ icon: faGithub, title: "Repository", link: data.repository },
		{ icon: faLink, title: "Live Site", link: data.link }
	];

	return (
		<section className="w-full">
			<Transition animation={{ name: "fade" }}>
				<Image
					priority
					width={896}
					height={504}
					quality={100}
					src={data.image}
					alt={data.title}
					className="mx-auto aspect-video w-full rounded-2xl bg-zinc-800 object-cover"
				/>
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.1 }}>
				<h1 className="mt-3 text-2xl font-extrabold text-zinc-50 md:mt-5 md:text-4xl">
					{data.title}
				</h1>
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.2 }}>
				<p className="mt-2 text-base text-zinc-300">{`Written on ${data.date} by Ali Hamas`}</p>
			</Transition>
			<div className="mt-2 flex flex-wrap items-center gap-x-4 text-xs text-zinc-300 md:gap-x-6 md:text-base">
				<Transition
					animation={{ name: "fade", delay: 0.3 }}
					className="flex items-center gap-x-1 md:gap-x-2"
				>
					<FontAwesomeIcon icon={faEye} className="w-3 md:w-4" />
					<span>{`${data.views} views`}</span>
				</Transition>
				{links.map((item, index) => {
					return (
						<Transition key={item.link} animation={{ name: "fade", delay: 0.4 + 0.1 * index }}>
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-x-1 *:transition-colors hover:text-zinc-50 hover:[--scale-x:1] md:gap-x-2"
							>
								<FontAwesomeIcon icon={item.icon} className="w-3 md:w-4" />
								<span className="decoration-gradient">{item.title}</span>
							</a>
						</Transition>
					);
				})}
			</div>
			<Transition animation={{ name: "fade", delay: 0.6 }}>
				<hr className="mt-3 w-full border-zinc-600" />
			</Transition>
		</section>
	);
}
