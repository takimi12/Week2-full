import { getProductById } from "@/api/products";
import { Metadata } from "next";
import { Suspense } from "react";

import { ProductItemCoverImage } from "@/ui/atoms/ProductItemCoverImage";

import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.coverImage.src,
				},
			],
		},
	};
}

export default async function Product({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	if (!product) {
		return {
			notFound: true,
		};
	}
	const { name, coverImage, description } = product;
	return (
		<div className="bg-white">
			<div className="max-w-2xs mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					{name}
				</h1>
				<p className="mt-4 text-base text-gray-500 sm:mt-5">
					{description}
				</p>
				<ProductItemCoverImage src={coverImage.src} alt={name} />
			</div>
			<aside className="max-w-2xs mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<Suspense>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</div>
	);
}
