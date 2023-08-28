import styled from 'styled-components';

export const NFTCardWrapper = styled.div`
	position: relative;
	width: 100%;

	background-color: var(--color-bg-secondary);
	border-radius: 20px;
	overflow: hidden;
`;

export const NFTCardThumb = styled.div`
	position: relative;
	width: 100%;
	height: 296px;
	overflow: hidden;

	@media screen and (max-width: 576px) {
		height: 238px;
	}
`;

export const NFTCardThumbImage = styled.div`
	width: 100%;
	height: 100%;

	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 20px 20px 0 0;

	transition: background-size var(--animation-speed-fast);
`;

export const NFTCardBody = styled.div`
	padding: 20px 30px 25px;
	@media screen and (max-width: 576px) {
		padding: 20px 20px 25px;
	}
`;

export const NFTCardTitle = styled.div`
	max-width: 270px;
	font-size: 22px;
	font-weight: 600;
	line-height: 140%; /* 30.8px */
	text-transform: capitalize;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;

	margin-bottom: 5px;

	@media screen and (max-width: 576px) {
		max-width: 440px;
	}
`;

export const NFTCardArtist = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 25px;
`;

export const NFTCardArtistAvatar = styled.div`
	width: 24px;
	height: 24px;
	margin-right: 12px;
	border-radius: 50%;
	overflow: hidden;

	flex-shrink: 0;
`;

export const NFTCardArtistAvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const NFTCardArtistName = styled.div`
	max-width: 234px;
	font-family: Space Mono;
	font-size: 16px;
	font-weight: 400;
	line-height: 140%;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const NftCardAddInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const NftCardPricing = styled.div`
	text-align: left;
`;

export const NftCardBidding = styled.div`
	text-align: right;
`;

export const NftCardLabel = styled.div`
	color: var(--color-caption);

	font-family: Space Mono;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 110%; /* 13.2px */

	margin-bottom: 8px;
`;

export const NftCardPricingData = styled.div`
	font-family: Space Mono;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%; /* 22.4px */

	@media screen and (max-width: 576px) {
		font-size: 12px;
		line-height: 110%;
	}
`;
