import styled from 'styled-components';

export const CardWrapper = styled.div`
	width: calc(100% / 3 - 30px);
	flex: 1;
`;

export const CardGrid = styled.div`
	margin-bottom: 15px;
`;

export const CardPrimaryPlaceholder = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 20px;
	overflow: hidden;
	margin-bottom: 15px;
`;

export const CardPrimaryPlaceholderImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CardSecondaryWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 15px;
`;

export const CardSecondaryPlaceholder = styled.div`
	width: calc(100% / 3 - 15);
	flex: 1;
	aspect-ratio: 1/1;
	border-radius: 20px;
	overflow: hidden;
`;

export const CardSecondaryPlaceholderImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CardNumberAdditional = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	border-radius: 20px;
	background-color: var(--color-cta);

	font-family: Space Mono;
	font-size: 22px;
	font-weight: 700;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;

	@media screen and (max-width: 576px) {
		font-size: 16px;
		line-height: 140%; /* 22.4px */
	}
`;

export const CardCollectionInfo = styled.div`
	font-size: 22px;
	font-weight: 600;
	line-height: 140%; /* 30.8px */
	text-transform: capitalize;
	margin-bottom: 10px;
`;

export const CardArtistInfo = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const CardArtistAvatar = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 12px;
`;

export const CardArtistAvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CardArtistName = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 140%; /* 22.4px */
`;
