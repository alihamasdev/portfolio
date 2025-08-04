import Link from "next/link";

import { GradientText } from "@/components/ui/gradient-text";
import { Icon, type IconId } from "@/components/ui/icon";
import { IconCloud } from "@/components/icon-cloud";
import { FadeUp } from "@/components/transitions";

const socialLinks: { name: string; icon: IconId; link: string }[] = [
	{ name: "Resume", icon: "file", link: "/resume" },
	{ name: "Github", icon: "github", link: "https://github.com/alihamasdev" },
	{ name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/alihamasdev" }
];

export default function HomePage() {
	return (
		<>
			<div className="mx-auto grid min-h-dvh w-full grid-cols-1 place-items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
				<div className="flex flex-col items-start justify-center pt-28 md:pt-0">
					<FadeUp transition={{ delay: 0.2 }}>
						<p className="text-foreground/80 text-base font-semibold md:text-lg">👋 Hi,</p>
					</FadeUp>
					<FadeUp transition={{ delay: 0.4 }} className="md:mt-2">
						<h1 className="flex flex-col items-start gap-x-[9px] text-3xl leading-tight font-bold md:flex-row md:text-[42px]">
							<div className="flex items-center gap-x-[9px]">
								<span>I&apos;m</span>
								<GradientText> Ali Hamas</GradientText>
								<span> - </span>
							</div>
							<span>Frontend Developer</span>
						</h1>
					</FadeUp>
					<FadeUp transition={{ delay: 0.6 }} className="mt-1 md:mt-2">
						<p className="text-foreground/80 text-sm font-medium md:text-base">
							A self-taught developer, who&apos;s currently pursuing a Full-Stack development to create stunning user
							experiences on the front-end, scalable, and secure infrastructure on the backend.
						</p>
					</FadeUp>
					<div className="mt-2 flex items-center gap-3 md:mt-2 md:gap-5">
						{socialLinks.map(({ name, icon, link }, index) => (
							<FadeUp key={name} transition={{ delay: index * 0.1 + 0.6 }}>
								<Link
									href={link}
									target={index === 0 ? "_self" : "_blank"}
									className="text-foreground/80 group hover:text-foreground flex items-center gap-x-1 transition-colors hover:[--scale-x:1]"
								>
									<Icon src={icon} className="fill-foreground/80 group-hover:fill-foreground size-4.5 transition-all" />
									<span className="decoration-gradient text-sm/4.5 font-semibold md:text-[15px]/4.5">{name}</span>
								</Link>
							</FadeUp>
						))}
					</div>
				</div>
				<IconCloud transition={{ duration: 0.3, delay: 1 }} />
			</div>
		</>
	);
}
