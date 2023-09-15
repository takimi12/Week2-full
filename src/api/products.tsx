import type { ProductItemType } from "../ui/types";

export const PER_PAGE = 4;
export const PRODUCTS_COUNT = 4206;
type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProducts = async (page: number, take = PER_PAGE) => {
	const offset = take * (page - 1);
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`,
	);
	const productListResponse =
		(await res.json()) as ProductResponseItem[];

	return productListResponse.map(
		productResponseItemToProductItemType,
	);
};
export const getAllProducts = async () => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=5000`,
	);
	const productListResponse =
		(await res.json()) as ProductResponseItem[];

	return productListResponse.map(
		productResponseItemToProductItemType,
	);
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	productResponseItem: ProductResponseItem,
): ProductItemType => {
	return {
		id: productResponseItem.id,
		name: productResponseItem.title,
		price: productResponseItem.price,
		category: productResponseItem.category,
		coverImage: {
			src: productResponseItem.image,
			alt: productResponseItem.title,
		},
		description: productResponseItem.description,
	};
};
