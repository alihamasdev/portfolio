import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const socialLinks = [
	{
		name: "Email",
		tooltip: "Contact me at alihamasdev@gmail.com",
		link: "mailto:alihamasdev@gmail.com",
		icon: faEnvelope
	},
	{
		name: "Github",
		tooltip: "Checkout projects on Github",
		link: "https://github.com/alihamasdev",
		icon: faGithub
	},
	{
		name: "LinkedIn",
		tooltip: "Find me on LinkedIn",
		link: "https://linkedin.com/in/alihamasdev",
		icon: faLinkedin
	},
	{
		name: "Twitter",
		tooltip: "Follow me on Twitter",
		link: "https://twitter.com/alihamasdev",
		icon: faXTwitter
	}
];
