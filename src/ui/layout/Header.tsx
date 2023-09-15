import DesktopMenu from "../molecules/DesktopMenu";
import UserMenu from "../molecules/UserMenu";

import Navigation from "../organisms/Navigation";

export default function Header() {
	return (
		<Navigation>
			<DesktopMenu />
			<UserMenu />
		</Navigation>
	);
}
