import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Transition from "@/lib/transitions";
import projects from "@/data/projects.json";
import { type ProjectType } from "@/data/types";
import { SelectContent, SelectTrigger } from "@/components/ui/select";
import { Select, SelectItem, SelectValue } from "@/components/ui/select";

export default function CommentForm() {
	return (
		<form className="mt-5 flex flex-col gap-y-4">
			<Transition animation={{ name: "fade", delay: 0.2 }}>
				<Input name="name" placeholder="Name" minLength={5} required />
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.3 }}>
				<Select name="project">
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a project" />
					</SelectTrigger>
					<SelectContent>
						{projects.map((item: ProjectType) => {
							return (
								<SelectItem key={item.slug} value={item.title}>
									{item.title}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.4 }}>
				<Textarea name="message" placeholder="Leave a message" rows={5} required />
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.5 }}>
				<Button variant="secondary" size="lg" className="w-full" children="Submit" />
			</Transition>
		</form>
	);
}
