import { notFound } from "next/navigation";

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const { default: Page } = await import(`./${params.filename}.mdx`).catch(() => notFound());
	return (
		<main>
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<article className="prose prose-lg">
					<Page />
				</article>
			</div>
		</main>
	);
}
