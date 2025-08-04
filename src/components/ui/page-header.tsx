import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/transitions";

function PageTitle({ className, ...props }: React.ComponentProps<"h1">) {
	return (
		<FadeUp transition={{ delay: 0.2 }}>
			<h1 className={cn("pt-5 text-2xl font-bold md:pt-10 md:text-4xl", className)} {...props} />
		</FadeUp>
	);
}

function PageDescription({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<FadeUp transition={{ delay: 0.4 }}>
			<p
				className={cn("text-foreground/90 text-xs leading-5 font-medium md:mt-2 md:text-base", className)}
				{...props}
			/>
		</FadeUp>
	);
}

export { PageTitle, PageDescription };
