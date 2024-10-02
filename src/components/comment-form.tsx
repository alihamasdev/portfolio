import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Transition from "@/lib/transitions";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectContent,
	SelectTrigger
} from "@/components/ui/select";

interface PropsTypes {
	projects_titles: {
		_id: string;
		title: string;
	}[];
}

export default function CommentForm({ projects_titles }: PropsTypes) {
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
						{projects_titles.map((item) => {
							return (
								<SelectItem key={item._id} value={item.title}>
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
