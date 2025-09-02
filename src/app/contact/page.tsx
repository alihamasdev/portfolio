import Link from "next/link";

import { socialLinks } from "@/data/social-links";
import { Icon } from "@/components/ui/icon";
import { PageDescription, PageTitle } from "@/components/ui/page-header";
import { MotionHighlight } from "@/components/motion-highlight";
import { FadeUp } from "@/components/transitions";

export default function ContactPage() {
	return (
		<div className="flex w-full max-w-3xl flex-col">
			<PageTitle>Contact</PageTitle>
			<PageDescription>Do you want to work with me? Feel free to get in touch with me.</PageDescription>
			<MotionHighlight mode="parent" containerClassName="mt-4 grid grid-cols-1 gap-4 md:w-2/3" hover>
				{socialLinks.map(({ icon, link, name, tooltip }, index) => (
					<FadeUp key={name} data-value={name} transition={{ delay: index * 0.2 + 0.6 }} className="relative z-[1]">
						<Link
							href={link}
							target="_blank"
							className="flex w-full items-center gap-x-3 px-3 py-2 md:gap-x-5 md:px-4 md:py-3"
						>
							<div className="flex size-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-50 md:size-[52px]">
								<Icon src={icon} className="size-4 fill-zinc-50 md:size-5" />
							</div>
							<div className="flex flex-col items-start">
								<h3 className="text-sm font-semibold text-zinc-100 md:text-base">{name}</h3>
								<p className="text-xs text-zinc-400 md:text-sm">{tooltip}</p>
							</div>
						</Link>
					</FadeUp>
				))}
			</MotionHighlight>
		</div>
	);
}
