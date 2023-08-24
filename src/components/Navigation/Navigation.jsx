import Logo from './Logo/Logo';
import Link from './Link/Link';
import AuthButton from './AuthButton/AuthButton';

import {
	NavigationWrapper,
	NavigationRow,
	NavigationLogo,
	NavigationLinks,
} from './Navigation.styled';

import { useMediaQuery } from '@uidotdev/usehooks';
import ToggleButton from './ToggleButton/ToggleButton';

const links = [
	{
		href: '/marketplace',
		text: 'Marketplace',
	},
	{
		href: '/rankings',
		text: 'Rankings',
	},
	{
		href: '/connect-wallet',
		text: 'Connect a wallet',
	},
];
const Navigation = () => {
	const isTablet = useMediaQuery('only screen and (max-width : 991px)');

	return (
		<NavigationWrapper>
			<NavigationRow>
				<NavigationLogo>
					<Logo />
				</NavigationLogo>
				{!isTablet && (
					<NavigationLinks>
						{links.map((link, index) => (
							<Link key={`${link.text}_${index}`} {...link} />
						))}
						<AuthButton />
					</NavigationLinks>
				)}

				{isTablet && <ToggleButton />}
			</NavigationRow>
		</NavigationWrapper>
	);
};

export default Navigation;
