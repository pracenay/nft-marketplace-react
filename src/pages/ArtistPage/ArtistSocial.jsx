import { ArtistLinks, ArtistLinkItem, ArtistLinkIcon } from './ArtistPage.styled';
import { artistSocialLinks } from 'src/constants';
const ArtistSocial = () => {
	return (
		<ArtistLinks>
			{artistSocialLinks.map((link) => {
				const Icon = link.icon;
				return (
					<ArtistLinkItem key={link.id}>
						<ArtistLinkIcon>
							<Icon />
						</ArtistLinkIcon>
					</ArtistLinkItem>
				);
			})}
		</ArtistLinks>
	);
};

export default ArtistSocial;
