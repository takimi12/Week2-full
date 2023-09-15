import { NavLink } from "./NavLink";

export default function DesktopMenu() {
	return (
		<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
			<div className="flex flex-shrink-0 items-center">
				<img
					className="h-8 w-auto"
					src="/next.svg"
					alt="Your Company"
				/>
			</div>
			<nav className="flex">
				<ul className="hidden gap-4 sm:ml-6 sm:flex">
					<li className={"inline-flex items-center"}>
						<NavLink href={"/"}>Home</NavLink>
					</li>
					<li className={"inline-flex items-center"}>
						<NavLink href="/products">All</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
