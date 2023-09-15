export const ProductItemCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
			<img
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center  hover:scale-105 transition-all duration-300 ease-in-out"
			/>
		</div>
	);
};
