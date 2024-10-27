"use client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Transition from "@/lib/transitions";
import projects from "@/data/projects.json";
import { action } from "@/app/contact/action";
import { Select, SelectItem } from "@/components/ui/select";
import { SelectValue, SelectContent, SelectTrigger } from "@/components/ui/select";

export default function CommentForm() {
	const router = useRouter();
	const [pending, startTransition] = useTransition();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const data = Object.fromEntries(form);
		const { name, comment, username, project } = data;
		if (!name && !username) {
			toast.error("Please provide either a name or username");
			return;
		}
		if (!comment) {
			toast.error("Please enter a comment message");
			return;
		}
		startTransition(async () => {
			try {
				const result = await action({ name, username, project, comment });
				if (result.error) {
					toast.error(result.message);
					return;
				}

				toast.success(result.message);
				setTimeout(() => {
					router.push("/comments");
				}, 1000);
			} catch (error) {
				console.error(error);
				toast.error("Something went wrong, try reloading");
			}
		});
	};

	return (
		<form className="mt-5 flex flex-col gap-y-4" onSubmit={handleSubmit}>
			<Transition animation={{ name: "fade", delay: 0.2 }}>
				<Input name="name" placeholder="Name" />
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.3 }}>
				<Input name="username" placeholder="Github username" />
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.4 }}>
				<Select name="project">
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a project" />
					</SelectTrigger>
					<SelectContent>
						{projects.map((item) => (
							<SelectItem key={item.slug} value={item.slug}>
								{item.title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.5 }}>
				<Textarea name="comment" placeholder="Leave a comment" rows={6} />
			</Transition>
			<Transition animation={{ name: "fade", delay: 0.6 }}>
				<Button variant="secondary" size="lg" className="w-full" disabled={pending}>
					{pending ? "Submitting...." : "Submit"}
				</Button>
			</Transition>
		</form>
	);
}
