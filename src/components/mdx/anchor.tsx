import Link from "next/link";

export default function Anchor({ href, children }: React.ComponentProps<"a">) {
	const isExternalLink = href?.startsWith("https://") || href?.startsWith("http://");
	return isExternalLink ? (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="decoration-gradient box-decoration-clone text-accent-pink"
		>
			{children}
		</a>
	) : (
		<Link href={href || ""} className="decoration-gradient box-decoration-clone text-accent-pink">
			{children}
		</Link>
	);
}
