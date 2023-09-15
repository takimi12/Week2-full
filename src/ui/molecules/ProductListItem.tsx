import Link from "next/link";

import type { ProductItemType } from "../types";

import { ProductItemCoverImage } from "../atoms/ProductItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

export const ProductListItem = ({
	product,
}: {
	product: ProductItemType;
}) => {
	return (
		<li key={product.id} className="group relative overflow-hidden">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductItemCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
