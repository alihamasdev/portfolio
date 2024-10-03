import { Fragment } from "react";
import { notFound } from "next/navigation";
import { type ProjectType } from "@/models/types";
import ProjectMetaSection from "@/components/project-meta-section";

interface PropTypes {
	children?: React.ReactNode;
	slug: string;
}

export default async function FetchProject({ slug, children }: PropTypes) {
	const response = await fetch(process.env.DOMAIN + "/api/projects/" + slug, { cache: "no-store" });
	if (!response.ok) {
		return notFound();
	}
	const project: ProjectType = await response.json();

	return (
		<Fragment>
			<ProjectMetaSection data={project} />
			{children}
		</Fragment>
	);
}
