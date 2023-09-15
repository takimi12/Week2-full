"use client";

import clsx from "clsx";
import { RouteType } from "next/dist/lib/load-custom-routes";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps<RouteType> {
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}

export const ActiveLink = ({
	href,
	children,
	exact,
	activeClassName,
	className,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	let isActive: boolean = false;
	let matchedPath: string = typeof href === "string" ? href : "";

	if (href && typeof href === "object" && href.pathname) {
		matchedPath = href.pathname;
	}

	if (matchedPath) {
		isActive = exact
			? pathname === matchedPath
			: pathname.startsWith(matchedPath) &&
			  (pathname[matchedPath.length] === "/" || pathname.length === matchedPath.length);
	}
	const activeClass = activeClassName ? activeClassName : "";
	const inactiveClass = className ? className : "";
	const linkClassName = clsx({
		[activeClass]: isActive,
		[inactiveClass]: !isActive,
	});
	return (
		<Link href={href} className={linkClassName}>
			{children}
		</Link>
	);
};
