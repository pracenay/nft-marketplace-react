import Avatar from 'src/assets/images/Avatar14.jpg'; // Adjust the path as needed
import HighlightedNFTCardImage from 'src/assets/images/HighlightedNFTCardImage.jpg';

import {
	CardWrapper,
	CardThumbnail,
	CardThumbnailImage,
	CardBody,
	CardTitle,
	CardArtist,
	CardArtistAvatar,
	CardArtistAvatarImage,
	CardArtistName,
} from './HighlightedNFTCard.styled';

const HighlightedNFTCard = () => {
	return (
		<CardWrapper>
			<CardThumbnail>
				<CardThumbnailImage src={HighlightedNFTCardImage} alt="" />
			</CardThumbnail>
			<CardBody>
				<CardTitle>Space Walking</CardTitle>
				<CardArtist>
					<CardArtistAvatar>
						<CardArtistAvatarImage src={Avatar} alt="avatar" />
					</CardArtistAvatar>
					<CardArtistName>Animakid</CardArtistName>
				</CardArtist>
			</CardBody>
		</CardWrapper>
	);
};

export default HighlightedNFTCard;
