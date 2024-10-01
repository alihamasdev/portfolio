import Transition from "@/lib/transitions";
import IconCloud from "@/components/ui/icon-cloud";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	const socialLinks = [
		{ name: "Resume", icon: faFileLines, link: "/resume.pdf" },
		{ name: "Github", icon: faGithub, link: "https://github.com/alihamasdev" },
		{ name: "LinkedIn", icon: faLinkedin, link: "https:/linkedin.com/in/alihamasdev" }
	];
	return (
		<section className="flex min-h-dvh w-full flex-col items-center gap-y-10 py-28 md:flex-row">
			<div className="flex w-full flex-col items-start justify-center md:w-[70%]">
				<Transition animation={{ name: "fade" }}>
					<p className="text-base font-medium text-zinc-200 md:text-lg">👋 Hi,</p>
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1 }}>
					<h1 className="text-3xl font-bold leading-tight md:mt-2 md:text-[42px]">
						I'm <span className="text-gradient">Ali Hamas</span> - Frontend Developer
					</h1>
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.2 }}>
					<p className="mt-2 text-sm text-zinc-300 md:mt-4 md:w-[85%] md:text-base">
						A self-taught developer, who's currently pursuing a Full-Stack development to create
						stunning user experiences on the front-end, scalable, and secure infrastructure on the
						backend.
					</p>
				</Transition>
				<div className="mt-3 flex items-center gap-3 text-zinc-300 md:mt-5 md:gap-5">
					{socialLinks.map((item, index) => {
						return (
							<Transition animation={{ name: "fade", delay: 0.3 + 0.1 * index }}>
								<a
									key={index}
									target="_blank"
									href={item.link}
									rel="noopener noreferrer"
									className="group-decoration flex flex-wrap items-center gap-1.5 *:transition-colors hover:text-zinc-50 md:hover:[--scale-x:1]"
								>
									<FontAwesomeIcon icon={item.icon} className="h-[18px] md:h-5" />
									<span className="decoration-gradient text-sm font-medium md:text-[15px]">
										{item.name}
									</span>
								</a>
							</Transition>
						);
					})}
				</div>
			</div>
			<div className="w-[80%] md:w-[30%]">
				<IconCloud />
			</div>
		</section>
	);
}
