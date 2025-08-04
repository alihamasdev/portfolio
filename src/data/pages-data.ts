import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Chaty from "~/public/projects/chaty.jpeg";
import ImageCropper from "~/public/projects/image-cropper.jpeg";
import ITab from "~/public/projects/itab.jpeg";
import ScorecardGenerator from "~/public/projects/scorecard-generator.jpeg";
import Todo from "~/public/projects/todo.jpeg";
import TwitterClone from "~/public/projects/twitter-clone.jpeg";

import { type IconId } from "@/components/ui/icon";

export const pages = [
	{ title: "Home", url: "/" },
	{ title: "Projects", url: "/projects" },
	{ title: "About", url: "/about" },
	{ title: "Contact", url: "/contact" }
];

interface Projects {
	title: string;
	url: string;
	image: StaticImport;
	description: string;
	techStack: IconId[];
}

export const projects: Projects[] = [
	{
		title: "Twitter Clone",
		url: "/projects/twitter-clone",
		image: TwitterClone,
		techStack: ["nextjs", "prisma", "supabase", "tailwindcss", "shadcn", "typescript"],
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Chaty - Public Chat Room",
		url: "/projects/chaty",
		image: Chaty,
		techStack: ["react", "firebase", "tailwindcss"],
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "iTab - New Tab",
		url: "/projects/itab",
		image: ITab,
		techStack: ["react", "tailwindcss"],
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Cricket Scorecard Generator",
		url: "/projects/scorecard-generator",
		image: ScorecardGenerator,
		techStack: ["nextjs", "tailwindcss", "shadcn"],
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Image Cropper",
		url: "/projects/image-cropper",
		image: ImageCropper,
		techStack: ["nextjs", "tailwindcss", "shadcn"],
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "ToDo App",
		url: "/projects/todo",
		image: Todo,
		techStack: ["react", "tailwindcss"],
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	}
];

export const blogs = [];
