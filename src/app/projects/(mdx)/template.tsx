import { ProjectHeader } from "./project-header";

export default function MDXTemplateLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="peer mx-auto w-full max-w-4xl pt-5 md:pt-10">
			<ProjectHeader>{children}</ProjectHeader>
		</div>
	);
}
