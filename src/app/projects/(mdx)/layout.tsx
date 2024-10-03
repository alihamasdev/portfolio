export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return <article className="mx-auto my-5 max-w-4xl md:my-10">{children}</article>;
}
