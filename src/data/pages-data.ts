import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Chaty from "~/public/projects/chaty.jpeg";
import CricketStat from "~/public/projects/cricket-stats.jpeg";
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

interface Project {
	title: string;
	url: string;
	image: StaticImport;
	techStack: IconId[];
	github: string;
	live: string;
	description: string;
}

export const projects: Project[] = [
	{
		title: "Twitter Clone",
		url: "/projects/twitter-clone",
		image: TwitterClone,
		techStack: ["nextjs", "prisma", "supabase", "tailwindcss", "shadcn", "typescript"],
		github: "https://github.com/alihamasdev/twitter-clone",
		live: "https://twitter-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Chaty - Public Chat Room",
		url: "/projects/chaty",
		image: Chaty,
		techStack: ["react", "firebase", "tailwindcss"],
		github: "https://github.com/alihamasdev/chaty",
		live: "https://chaty-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Cricket Stats",
		url: "/projects/cricket-stats",
		image: CricketStat,
		techStack: ["nextjs", "supabase", "typescript", "shadcn", "tailwindcss"],
		github: "https://github.com/alihamasdev/cricket-stats",
		live: "https://stats-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "iTab - New Tab",
		url: "/projects/itab",
		image: ITab,
		techStack: ["react", "tailwindcss"],
		github: "https://github.com/alihamasdev/itab",
		live: "https://itab-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Cricket Scorecard Generator",
		url: "/projects/scorecard-generator",
		image: ScorecardGenerator,
		techStack: ["nextjs", "typescript", "tailwindcss", "shadcn"],
		github: "https://github.com/alihamasdev/scorecard-generator",
		live: "https://scorecard-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Image Cropper & Resizer",
		url: "/projects/image-cropper",
		image: ImageCropper,
		techStack: ["nextjs", "typescript", "tailwindcss", "shadcn"],
		github: "https://github.com/alihamasdev/image-cropper",
		live: "https://cropper-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "ToDo App",
		url: "/projects/todo",
		image: Todo,
		techStack: ["react", "tailwindcss"],
		github: "https://github.com/alihamasdev/todo-app",
		live: "https://todo-alihamas.vercel.app",
		description:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	}
];

export const blogs = [];
