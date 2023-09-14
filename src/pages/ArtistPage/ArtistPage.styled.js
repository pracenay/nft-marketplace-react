import styled from 'styled-components';

export const ArtistLinkItem = styled.div``;

export const ArtistLinkIcon = styled.div``;

// DetailsWrapper,
// 	DetailsBackground,
// 	DetailsContent,
// 	DetailsBackgroundImage,
// 	DetailsContentAvatar,
// 	DetailsContentWrapper,
// 	ArtistNickname,
// 	ArtistStats,
// 	ArtistStatsItem,
// 	ArtistBio,
// 	ArtistBioLabel,
// 	ArtistBioText,

export const DetailsWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export const DetailsBackground = styled.div`
	width: 100%;
	height: 320px;
	margin-bottom: 50px;
`;

export const DetailsBackgroundImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const DetailsAvatar = styled.div`
	position: absolute;
	left: 30px;
	top: -15px;
	transform: translateY(-50%);
`;

export const DetailsAvatarContainer = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 20px;
	outline: 2px solid var(--color-bg-primary);
	overflow: hidden;
`;

export const ArtistAvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const DetailsContent = styled.div`
	padding: 40px 0;
	width: 100%;
	height: 100%;
`;

export const DetailsContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 100px;
`;

export const DetailsContentInfo = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
	max-width: 600px;
	width: 100%;
`;

export const DetailsContentActions = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

export const ArtistInfoItem = styled.div``;

export const ArtistNickname = styled.div`
	font-family: Work Sans;
	font-size: 51px;
	font-style: normal;
	font-weight: 600;
	line-height: 110%;
	text-transform: capitalize;
`;

export const ArtistStats = styled.div``;

export const ArtistStatsItem = styled.div``;

export const ArtistBio = styled.div``;

export const DetailsLabel = styled.div`
	color: var(--color-caption);
	/* H5 - Space Mono */
	font-family: Space Mono;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;

	margin-bottom: 10px;
`;

export const ArtistBioText = styled.div`
	/* Body Text- Work Sans */
	font-family: Work Sans;
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;
`;

export const ArtistSocials = styled.div``;

export const ArtistLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const DetailsActionButton = styled.div``;
