import { RouteType } from "next/dist/lib/load-custom-routes";
import { LinkProps } from "next/link";

import { ActiveLink } from "../atoms/ActiveLink";

interface NavLinkProps extends LinkProps<RouteType> {
	exact?: boolean;
}
export const MobileNavLink = ({
	href,
	children,
	exact,
}: NavLinkProps) => {
	const defaultClassName =
		"block border-l-4 py-2 pl-3 pr-4 text-base font-medium";
	const activeLinkClassName = `${defaultClassName} border-indigo-500 bg-indigo-50 text-indigo-700`;
	const className = `${defaultClassName} border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`;

	return (
		<ActiveLink
			href={href}
			className={className}
			activeClassName={activeLinkClassName}
			exact={exact}
		>
			{children}
		</ActiveLink>
	);
};
