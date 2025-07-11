import { type IconId } from "@/components/ui/icon";

export interface SocialLink {
	name: string;
	tooltip: string;
	link: string;
	icon: IconId;
}

export const socialLinks = [
	{
		name: "Email",
		tooltip: "Contact me at alihamasdev@gmail.com",
		link: "mailto:alihamasdev@gmail.com",
		icon: "email"
	},
	{ name: "Github", tooltip: "Checkout projects on Github", link: "https://github.com/alihamasdev", icon: "github" },
	{ name: "LinkedIn", tooltip: "Find me on LinkedIn", link: "https://linkedin.com/in/alihamasdev", icon: "linkedin" },
	{ name: "Twitter", tooltip: "Follow me on Twitter", link: "https://twitter.com/alihamasdev", icon: "twitter" }
] satisfies SocialLink[];
