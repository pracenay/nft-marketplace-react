import {
	CardWrapper,
	CardGrid,
	CardPrimaryPlaceholder,
	CardPrimaryPlaceholderImage,
	CardSecondaryWrapper,
	CardSecondaryPlaceholder,
	CardSecondaryPlaceholderImage,
	CardNumberAdditional,
	CardCollectionInfo,
	CardArtistInfo,
	CardArtistAvatar,
	CardArtistAvatarImage,
	CardArtistName,
} from './CollectionCard.styled';

const CollectionCard = ({ collectionTitle, artistName, artistAvatar, images, index }) => {
	return (
		<CardWrapper>
			<CardGrid>
				<CardPrimaryPlaceholder>
					<CardPrimaryPlaceholderImage src={images[0].src} />
				</CardPrimaryPlaceholder>
				<CardSecondaryWrapper>
					<CardSecondaryPlaceholder>
						<CardSecondaryPlaceholderImage src={images[1].src} />
					</CardSecondaryPlaceholder>
					<CardSecondaryPlaceholder>
						<CardSecondaryPlaceholderImage src={images[2].src} />
					</CardSecondaryPlaceholder>
					<CardSecondaryPlaceholder>
						<CardNumberAdditional>1025+</CardNumberAdditional>
					</CardSecondaryPlaceholder>
				</CardSecondaryWrapper>
			</CardGrid>
			<CardCollectionInfo>DSGN Animals</CardCollectionInfo>
			<CardArtistInfo>
				<CardArtistAvatar>
					<CardArtistAvatarImage src={artistAvatar} />
				</CardArtistAvatar>
				<CardArtistName>MrFox</CardArtistName>
			</CardArtistInfo>
		</CardWrapper>
	);
};

export default CollectionCard;
