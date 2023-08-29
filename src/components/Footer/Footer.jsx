import DiscordIcon from 'src/components/Icons/DiscordIcon/DiscordIcon';
import TwitterIcon from 'src/components/Icons/TwitterIcon/TwitterIcon';
import YoutubeIcon from 'src/components/Icons/YoutubeIcon/YoutubeIcon';
import InstagramIcon from 'src/components/Icons/InstagramIcon/InstagramIcon';

import {
	FooterWrapper,
	FooterContent,
	FooterInfo,
	FooterLogoWrapper,
	FooterText,
	FooterSocial,
	FooterSocialItems,
	FooterSocialItem,
	FooterExplore,
	FooterSubscribe,
	FooterTitle,
	FooterNavigation,
	FooterNavigationItem,
	FooterCopyright,
	FooterCopyrightText,
} from './Footer.styled';

import { ButtonFlexContent } from 'src/components/common';

import LogoIcon from 'src/components/Icons/LogoIcon/LogoIcon';
import MailIcon from 'src/components/Icons/MailIcon/MailIcon';
import Container from 'src/components/Container/Container';

import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';

export const socialLinks = [
	{
		id: 1,
		title: 'Discord',
		icon: <DiscordIcon />,
		href: '/',
	},

	{
		id: 2,
		title: 'Youtube',
		icon: <YoutubeIcon />,
		href: '/',
	},
	{
		id: 3,
		title: 'Twitter',
		icon: <TwitterIcon />,
		href: '/',
	},
	{
		id: 4,
		title: 'Instagram',
		icon: <InstagramIcon />,
		href: '/',
	},
];
const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<FooterContent>
					<FooterInfo>
						<FooterTitle>
							<FooterLogoWrapper>
								<LogoIcon width={243} height={32} />
							</FooterLogoWrapper>
						</FooterTitle>

						<FooterText style={{ marginBottom: 20 }}>
							NFT marketplace UI created with Anima for Figma.
						</FooterText>
						<FooterSocial>
							<FooterText>Join our community</FooterText>
							<FooterSocialItems>
								{socialLinks.map((link) => (
									<FooterSocialItem to={link.href} key={link.id}>
										{link.icon}
									</FooterSocialItem>
								))}
							</FooterSocialItems>
						</FooterSocial>
					</FooterInfo>
					<FooterExplore>
						<FooterTitle>Explore</FooterTitle>
						<FooterNavigation>
							<FooterNavigationItem>
								<FooterText>Marketplace</FooterText>
							</FooterNavigationItem>
							<FooterNavigationItem>
								<FooterText>Rankings</FooterText>
							</FooterNavigationItem>
							<FooterNavigationItem>
								<FooterText>Connect a wallet</FooterText>
							</FooterNavigationItem>
						</FooterNavigation>
					</FooterExplore>
					<FooterSubscribe>
						<FooterTitle>Join our weekly digest</FooterTitle>
						<FooterText>Get exclusive promotions & updates straight to your inbox.</FooterText>

						<Input>
							<Button variant="primary" flexShrink={0}>
								<ButtonFlexContent>
									<MailIcon width={20} height={20} marginRight={10} />
									Subscribe
								</ButtonFlexContent>
							</Button>
						</Input>
					</FooterSubscribe>
				</FooterContent>
				<FooterCopyright>
					<FooterCopyrightText>Ⓒ NFT Market. Use this template freely.</FooterCopyrightText>
				</FooterCopyright>
			</Container>
		</FooterWrapper>
	);
};

export default Footer;
