import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Page() {
	return (
		<div className="flex flex-col gap-12 sm:gap-16">
			<Hero />
			<hr className="wave my-4" aria-hidden="true" />
			<Experience />
			<hr className="wave my-4" aria-hidden="true" />
			<Projects />
			<hr className="wave my-4" aria-hidden="true" />
			<Stack />
			<hr className="wave my-4" aria-hidden="true" />
		</div>
	);
}
