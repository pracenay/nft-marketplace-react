import {
	NFTCardWrapper,
	NFTCardThumb,
	NFTCardThumbImage,
	NFTCardBody,
	NFTCardTitle,
	NFTCardArtist,
	NFTCardArtistAvatar,
	NFTCardArtistAvatarImage,
	NFTCardArtistName,
	NftCardAddInfo,
	NftCardPricing,
	NftCardBidding,
	NftCardLabel,
	NftCardPricingData,
} from './NFTCard.styled';

const NFTCard = ({ src, title, artist, price, highestBid }) => {
	return (
		<NFTCardWrapper>
			<NFTCardThumb>
				<NFTCardThumbImage backgroundImage={src}></NFTCardThumbImage>
			</NFTCardThumb>
			<NFTCardBody>
				<NFTCardTitle>{title}</NFTCardTitle>
				<NFTCardArtist>
					<NFTCardArtistAvatar>
						<NFTCardArtistAvatarImage src={artist?.avatar} />
					</NFTCardArtistAvatar>
					<NFTCardArtistName>{artist?.nickname}</NFTCardArtistName>
				</NFTCardArtist>
				<NftCardAddInfo>
					<NftCardPricing>
						<NftCardLabel>Price</NftCardLabel>
						<NftCardPricingData>{price} ETH</NftCardPricingData>
					</NftCardPricing>
					<NftCardBidding>
						<NftCardLabel>Highest Bid</NftCardLabel>
						<NftCardPricingData>{highestBid} wETH</NftCardPricingData>
					</NftCardBidding>
				</NftCardAddInfo>
			</NFTCardBody>
		</NFTCardWrapper>
	);
};

export default NFTCard;
