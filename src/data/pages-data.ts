import { type IconId } from "@/components/ui/icon";

export const pages = [
	{ title: "Home", url: "/" },
	{ title: "Projects", url: "/projects" },
	{ title: "Blogs", url: "/blogs" },
	{ title: "About", url: "/about" },
	{ title: "Contact", url: "/contact" }
];

interface Projects {
	title: string;
	url: string;
	description: string;
	techStack: IconId[];
}

export const projects: Projects[] = [];

export const blogs = [];
