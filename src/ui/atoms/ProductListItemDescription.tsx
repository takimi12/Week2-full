import { priceFormat } from "@/utils/priceFormat";

import { ProductItemType } from "../types";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};
export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	const formattedPrice = priceFormat(price);
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">
					{name}
				</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Category:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Price:</span> {formattedPrice}$
			</p>
		</div>
	);
};
