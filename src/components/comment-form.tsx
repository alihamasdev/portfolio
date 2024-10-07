"use client";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Transition from "@/lib/transitions";
import { useRouter } from "next/navigation";
import { useRef, useTransition } from "react";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectContent,
	SelectTrigger
} from "@/components/ui/select";

interface PropsTypes {
	data: {
		title: string;
		slug: string;
	}[];
}

export default function CommentForm({ data }: PropsTypes) {
	const router = useRouter();
	const formRef = useRef<HTMLFormElement>(null);
	const [pending, startTransition] = useTransition();

	const handleSubmit = async (data: FormData) => {
		startTransition(async () => {
			try {
				let name = data.get("name");
				const comment = data.get("comment");
				const project = data.get("project");
				const username = data.get("username");
				let image = `https://cloud.appwrite.io/v1/avatars/initials?width=50&height=50&name=${name}`;

				if (!name && !username) throw new Error("Please provide either a name or username");
				if (!comment) throw new Error("Please enter a comment message");
				if (username) {
					const gitReq = await fetch("https://api.github.com/users/" + username);
					if (!gitReq.ok) {
						throw new Error("Please enter a valid github username");
					} else {
						const gitData = await gitReq.json();
						name = gitData.name;
						image = gitData.avatar_url;
					}
				}

				const body = JSON.stringify({ name, username, image, comment, project });
				const res = await fetch("/api/comments", { method: "POST", body });
				if (res.ok) {
					toast.success(`Thanks for your comment ${name}`);
					formRef.current?.reset();
					setTimeout(() => {
						router.push("/comments");
					}, 1000);
				} else {
					toast.error("Something went wrong, try reloading");
				}
			} catch (error: any) {
				console.error(error);
				toast.error(error.message);
			}
		});
	};

	return (
		<form className="mt-5 flex flex-col gap-y-4" ref={formRef} action={handleSubmit}>
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
						{data.map((item) => {
							return (
								<SelectItem key={item.slug} value={item.slug}>
									{item.title}
								</SelectItem>
							);
						})}
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
