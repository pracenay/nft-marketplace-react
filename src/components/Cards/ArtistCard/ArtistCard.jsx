import {
	ArtistCardWrapper,
	ArtistCardContent,
	ArtistIndex,
	ArtistAvatar,
	ArtistAvatarWrapper,
	ArtistAvatarImage,
	ArtistName,
	ArtistInfo,
	ArtistSales,
	ArtistSalesLabel,
	ArtistSalesCount,
} from './ArtistCard.styled';
const ArtistCard = ({ artistAvatar, artistName, totalSales, index }) => {
	return (
		<ArtistCardWrapper>
			<ArtistIndex>{index}</ArtistIndex>
			<ArtistCardContent>
				<ArtistAvatar>
					<ArtistAvatarWrapper>
						<ArtistAvatarImage src={artistAvatar} alt={`${artistName}-avatar`} />
					</ArtistAvatarWrapper>
				</ArtistAvatar>
				<ArtistInfo>
					<ArtistName>{artistName}</ArtistName>
					<ArtistSales>
						<ArtistSalesLabel>Total Sales:</ArtistSalesLabel>
						<ArtistSalesCount>{totalSales} ETH</ArtistSalesCount>
					</ArtistSales>
				</ArtistInfo>
			</ArtistCardContent>
		</ArtistCardWrapper>
	);
};

export default ArtistCard;
