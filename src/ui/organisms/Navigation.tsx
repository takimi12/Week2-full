"use client";

import { Disclosure } from "@headlessui/react";

import { MobileMenuButton } from "../atoms/MobileMenuButton";

import { MobileNavLink } from "../molecules/MobileNavLink";

export default function Navigation({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<MobileMenuButton open={open} />
							</div>
							{children}
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pb-4 pt-2">
							<MobileNavLink href="/">Home</MobileNavLink>
							<MobileNavLink href="/products">All</MobileNavLink>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
