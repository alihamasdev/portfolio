import { cn } from "@/lib/utils";
import Icon from "react-inlinesvg";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TechStack({ tech, className }: { tech: string[]; className?: string }) {
	return (
		<div className={cn("flex items-center gap-x-2 md:gap-x-3", className)}>
			{tech.map((item) => {
				return (
					<Tooltip key={item}>
						<TooltipTrigger>
							<Icon src={`/icons/skills/${item}.svg`} className="size-[17px] md:size-6" />
						</TooltipTrigger>
						<TooltipContent className="capitalize">{item}</TooltipContent>
					</Tooltip>
				);
			})}
		</div>
	);
}
