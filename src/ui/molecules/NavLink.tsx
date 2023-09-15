"use client";

import { RouteType } from "next/dist/lib/load-custom-routes";
import { LinkProps } from "next/link";

import { ActiveLink } from "../atoms/ActiveLink";

interface NavLinkProps extends LinkProps<RouteType> {
	exact?: boolean;
}
export const NavLink = ({ href, children, exact }: NavLinkProps) => {
	const defaultClassName = "border-b-2 flex items-center h-full";
	const activeLinkClassName =
		defaultClassName + " border-indigo-500 text-gray-900";
	const className =
		defaultClassName +
		" border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";

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
