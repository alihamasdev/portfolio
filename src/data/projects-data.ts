export type ProjectsDataType = {
	title: string;
	slug: string;
	image: string;
	techStack: string[];
	link: string;
	repository: string;
	desc: string;
};

export const projectsData = [
	{
		title: "Twitter Clone",
		slug: "twitter-clone",
		image: "/twitter.png",
		techStack: ["nextjs", "appwrite", "redux", "typescript", "tailwindcss"],
		link: "https://twitter-alihamas.vercel.app",
		repository: "https://github.com/ali-hamas/twitter-clone",
		desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Chaty - Public Chat Room",
		slug: "chaty",
		image: "/chaty.png",
		techStack: ["react", "firebase", "typescript", "tailwindcss"],
		link: "https://chaty-alihamas.vercel.app/",
		repository: "https://github.com/alihamasdev/chaty",
		desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "iTab - Chrome New Tab",
		slug: "itab",
		image: "/itab.png",
		techStack: ["react", "tailwindcss"],
		link: "https://iTab-alihamas.vercel.app",
		repository: "https://github.com/ali-hamas/iTab",
		desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "To-Do App",
		slug: "todo-app",
		image: "/todo.png",
		techStack: ["react", "tailwindcss"],
		link: "https://todo-alihamas.vercel.app/",
		repository: "https://github.com/ali-hamas/todo-app",
		desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	},
	{
		title: "Ecommerce App",
		slug: "ecommerce-app",
		image: "/itab.png",
		techStack: ["react", "appwrite", "tailwindcss"],
		link: "https://twitter-alihamas.vercel.app",
		repository: "",
		desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus per pulvinar fames platea sollicitudin orci facilisi. Potenti varius pellentesque vel sed varius elit. Venenatis suspendisse odio, aliquam netus commodo dui. Nunc nec neque nunc molestie malesuada habitasse nibh? Porta habitasse euismod non egestas lobortis, vestibulum maecenas ut. Sagittis ut mus nec sollicitudin tellus lacus ad. Porttitor integer lacinia duis senectus litora."
	}
] as ProjectsDataType[];
