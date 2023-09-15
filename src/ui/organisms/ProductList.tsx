import type { ProductItemType } from "../types";

import { ProductListItem } from "../molecules/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: ProductItemType[];
}) => {
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
