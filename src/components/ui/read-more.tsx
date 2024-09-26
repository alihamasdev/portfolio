import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type ReadMoreProps = {
	className?: string;
	iconClass?: string;
};

export default function ReadMore({ className, iconClass }: ReadMoreProps) {
	return (
		<div
			className={cn("inline-flex cursor-pointer items-center gap-x-0.5 *:hover:ml-2", className)}
		>
			read more
			<FontAwesomeIcon
				icon={faChevronRight}
				className={cn(
					"mt-px !size-[10px] text-zinc-400 transition-all duration-300 md:mt-0.5 md:size-3",
					iconClass
				)}
			/>
		</div>
	);
}
