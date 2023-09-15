import clsx from "clsx";

import { ActiveLink } from "../atoms/ActiveLink";

export const PaginationItem = ({
	baseUrl,
	page,
}: {
	baseUrl: string;
	page: number;
}) => {
	const url = {
		pathname: page === 1 ? baseUrl : `${baseUrl}/${page}`,
	};
	const defaultClassName =
		"relative inline-flex items-center px-4 py-2 text-sm font-semibold";
	const className = clsx({
		[defaultClassName]: true,
		"text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0":
			true,
	});
	const activeClassName = clsx({
		[defaultClassName]: true,
		"z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":
			true,
	});
	return (
		<ActiveLink
			exact
			href={url}
			className={className}
			activeClassName={activeClassName}
		>
			{page}
		</ActiveLink>
	);
};
