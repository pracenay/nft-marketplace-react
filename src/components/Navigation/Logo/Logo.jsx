import { LogoWrapper, LogoText } from './Logo.styled';
import LogoIcon from '../../Icons/LogoIcon/LogoIcon';
import LogoTextIcon from '../../Icons/LogoTextIcon/LogoTextIcon';

import { useMediaQuery } from '@uidotdev/usehooks';

const Logo = () => {
	const isTabled = useMediaQuery('only screen and (max-width : 991px)');
	return (
		<LogoWrapper>
			<LogoIcon width={isTabled && 24} height={isTabled && 24} />
			<LogoText>
				<LogoTextIcon width={isTabled && 150} height={isTabled && 15} />
			</LogoText>
		</LogoWrapper>
	);
};

export default Logo;
