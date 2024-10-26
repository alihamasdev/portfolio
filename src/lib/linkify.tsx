import Linkify from "linkify-react";
import { twMerge } from "tailwind-merge";

interface PropTypes {
	children: React.ReactNode;
	className?: string;
}

export default function LinkFormatter({ children, className }: PropTypes) {
	const renderLink = ({ attributes, content }: { attributes: any; content: any }) => {
		const { href, ...props } = attributes;
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={twMerge(
					"text-accent-pink underline-offset-2 [-webkit-box-decoration-break:clone] hover:underline",
					className
				)}
				{...props}
			>
				{content}
			</a>
		);
	};
	return <Linkify options={{ render: renderLink }}>{children}</Linkify>;
}
