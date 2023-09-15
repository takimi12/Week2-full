import { getProducts } from "@/api/products";

import { ProductListItem } from "../molecules/ProductListItem";

export const SuggestedProducts = async () => {
	const products = await getProducts(1, 4);
	return (
		<ul
			data-testid="products-list"
			className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
