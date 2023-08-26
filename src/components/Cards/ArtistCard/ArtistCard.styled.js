import styled from 'styled-components';

export const ArtistCardWrapper = styled.div`
	position: relative;
	max-width: 240px;
	width: 100%;
	padding: 20px;
	background-color: var(--color-bg-secondary);
	border-radius: 20px;
	@media screen and (max-width: 991px) {
		max-width: 330px;
	}
	@media screen and (max-width: 576px) {
		max-width: 100%;
	}
`;

export const ArtistCardContent = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 991px) {
		flex-direction: row;
		gap: 20px;
	}
`;

export const ArtistIndex = styled.div`
	font-family: Space Mono;
	font-size: 16px;
	font-weight: 400;
	line-height: 140%; /* 22.4px */
	color: var(--color-caption);

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	position: absolute;
	top: 18px;
	left: 20px;
	width: 30px;
	height: 30px;

	background: var(--color-bg-primary);
	border-radius: 50%;

	@media screen and (max-width: 991px) {
		top: 13px;
		left: 12px;
	}
`;

export const ArtistAvatar = styled.div`
	display: flex;
	justify-content: center;
`;

export const ArtistAvatarWrapper = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	overflow: hidden;

	margin-bottom: 20px;
	margin-right: -10px;

	@media screen and (max-width: 991px) {
		width: 60px;
		height: 60px;
		margin-right: 0;
		margin-bottom: 0;
	}
`;

export const ArtistAvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ArtistName = styled.div`
	font-size: 22px;
	font-style: normal;
	font-weight: 600;
	line-height: 140%; /* 30.8px */
	text-transform: capitalize;
	text-align: center;

	margin-bottom: 5px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;

	@media screen and (max-width: 991px) {
		max-width: 210px;
		text-align: start;
	}
	@media screen and (max-width: 576px) {
		max-width: 190px;
	}
`;

export const ArtistInfo = styled.div``;

export const ArtistSales = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	text-align: center;
	@media screen and (max-width: 991px) {
		text-align: start;
		justify-content: start;
		gap: 18px;
	}
	@media screen and (max-width: 576px) {
		gap: 5px;
	}
`;

export const ArtistSalesLabel = styled.div`
	color: var(--color-caption);
	font-family: Work Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%; /* 22.4px */
`;

export const ArtistSalesCount = styled.div`
	font-family: Space Mono;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%; /* 22.4px */
`;
