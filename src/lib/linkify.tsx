import Linkify from "linkify-react";

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
				className="text-accent-pink underline-offset-2 [-webkit-box-decoration-break:clone] hover:underline"
				{...props}
			>
				{content}
			</a>
		);
	};
	return (
		<Linkify options={{ render: renderLink }} className={className}>
			{children}
		</Linkify>
	);
}
