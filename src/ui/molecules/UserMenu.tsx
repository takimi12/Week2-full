import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import ProfileDropdown from "../atoms/ProfileDropdown";

export default function UserMenu() {
	return (
		<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
			<button
				type="button"
				className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<span className="absolute -inset-1.5" />
				<span className="sr-only">View cart</span>
				<ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
			</button>

			<ProfileDropdown />
		</div>
	);
}
