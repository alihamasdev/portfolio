import Heading from "@/components/ui/page-heading";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="pt-5 md:pt-20">
			<Heading>Comments</Heading>
			<title>Comments - Developer Portfolio | Ali Hamas</title>
			{children}
		</section>
	);
}
