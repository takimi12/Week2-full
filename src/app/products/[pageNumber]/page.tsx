import { PER_PAGE, PRODUCTS_COUNT } from "@/api/products";
import { getProducts } from "@/api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateMetadata({
	params,
}: {
	params: { pageNumber: string };
}): Promise<Metadata> {
	return {
		title: `Products list - page ${params.pageNumber}`,
		openGraph: {
			title: `Products list - page ${params.pageNumber}`,
		},
	};
}

export const generateStaticParams = async () => {
	// const products = await getAllProducts();

	// const productsCount = products.length;
	const numberOfPages = Math.ceil(PRODUCTS_COUNT / PER_PAGE);
	let productPages = [];
	for (let i = 0; i < numberOfPages; i++) {
		productPages.push({
			pageNumber: `${i + 1}`,
		});
	}

	return productPages;
};

export default async function Products({
	params: { pageNumber = "1" },
}: {
	params: { pageNumber: string };
}) {
	let currentPage = parseInt(pageNumber);
	const perPage = PER_PAGE;
	if (isNaN(currentPage)) {
		currentPage = 1;
	}
	const products = await getProducts(currentPage, perPage);
	if (products.length === 0) {
		return notFound();
	}
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Products
				</h2>
				{!!products && <ProductList products={products} />}
				{products.length === 0 && (
					<div className="mt-10">Products not found.</div>
				)}
				<Pagination
					perPage={perPage}
					currentPage={currentPage}
					totalItems={PRODUCTS_COUNT}
				/>
			</div>
		</div>
	);
}
