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
		techStack: ["nextjs", "prisma", "supabase", "tanstack-query", "typescript", "shadcn", "tailwindcss"],
		github: "https://github.com/alihamasdev/twitter-clone",
		live: "https://twitter-alihamas.vercel.app",
		description:
			"A social media platform allowing users to post, repost, like, comment, bookmark, and follow others, with profile customization, post deletion, and user search functionality."
	},
	{
		title: "Chaty - Public Chat Room",
		url: "/projects/chaty",
		image: Chaty,
		techStack: ["react", "firebase", "motion", "typescript", "tailwindcss"],
		github: "https://github.com/alihamasdev/chaty",
		live: "https://chaty-alihamas.vercel.app",
		description:
			"A real-time chat app with a single public room where authenticated users can create, edit, and delete messages, designed as a skill showcase with future one-on-one chat plans."
	},
	{
		title: "Cricket Stats",
		url: "/projects/cricket-stats",
		image: CricketStat,
		techStack: ["nextjs", "supabase", "typescript", "shadcn", "tailwindcss"],
		github: "https://github.com/alihamasdev/cricket-stats",
		live: "https://stats-alihamas.vercel.app",
		description:
			"A personal app to track cricket player stats (batting, bowling, fielding) with date filters, all-time stats, and player comparisons for family and friend matches."
	},
	{
		title: "iTab - New Tab",
		url: "/projects/itab",
		image: ITab,
		techStack: ["react", "tailwindcss"],
		github: "https://github.com/alihamasdev/itab",
		live: "https://itab-alihamas.vercel.app",
		description:
			"A Chrome extension replacing the default new tab with a custom page featuring time, dynamic day greetings, a Google search bar, and editable shortcut links."
	},
	{
		title: "Cricket Scorecard Generator",
		url: "/projects/scorecard-generator",
		image: ScorecardGenerator,
		techStack: ["nextjs", "typescript", "tailwindcss", "shadcn"],
		github: "https://github.com/alihamasdev/scorecard-generator",
		live: "https://scorecard-alihamas.vercel.app",
		description:
			"A tool to manually generate ICC-style match scorecards for record-keeping, with ongoing work to integrate automatic stat generation from Cricket Stats"
	},
	{
		title: "Image Cropper & Resizer",
		url: "/projects/image-cropper",
		image: ImageCropper,
		techStack: ["nextjs", "typescript", "shadcn", "tailwindcss"],
		github: "https://github.com/alihamasdev/image-cropper",
		live: "https://cropper-alihamas.vercel.app",
		description:
			"A tool for cropping images with custom aspect ratios, widths, heights, and format changes to meet specific resizing needs"
	},
	{
		title: "ToDo App",
		url: "/projects/todo",
		image: Todo,
		techStack: ["react", "tailwindcss"],
		github: "https://github.com/alihamasdev/todo-app",
		live: "https://todo-alihamas.vercel.app",
		description:
			"A simple app for managing tasks with local storage, allowing users to add, edit, delete, and filter todos (all, completed, incomplete)"
	}
];

export const blogs = [];
