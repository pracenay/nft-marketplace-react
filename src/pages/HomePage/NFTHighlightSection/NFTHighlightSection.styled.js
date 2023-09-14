import styled from 'styled-components';

export const NFTHighlightWrapper = styled.div`
	display: flex;
	align-items: flex-end;

	position: relative;
	width: 100%;
	min-height: 640px;
	background: url(${({ backgroundImage }) => backgroundImage});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	padding-bottom: 60px;
	@media screen and (max-width: 991px) {
		margin-top: 40px;
	}

	@media screen and (max-width: 576px) {
		margin-top: 20px;
		min-height: 590px;
		padding-bottom: 40px;
	}
`;

export const Gradient = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%);
	z-index: 0;
`;

export const NFTHighlightContent = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	z-index: 1;

	@media screen and (max-width: 576px) {
		flex-direction: column;
	}
`;

export const NFTHighlightInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const Badge = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;

	background: var(--color-bg-secondary);
	border-radius: 20px;

	padding: 10px 20px;
	margin-bottom: 30px;
`;

export const BadgeImage = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	overflow: hidden;
	object-fit: cover;
`;

export const BadgeText = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 140%; /* 22.4px */
`;

export const NFTHighlightInfoTitle = styled.div`
	font-size: 51px;
	font-weight: 600;
	line-height: 110%; /* 56.1px */
	text-transform: capitalize;
	margin-bottom: 30px;
	@media screen and (max-width: 991px) {
		font-size: 38px;
		line-height: 120%; /* 45.6px */
	}
`;

export const NFTHighlightInfoButton = styled.div``;

export const NFTHighlightTimer = styled.div`
	width: 295px;
	display: flex;
	justify-content: end;
	align-items: flex-end;
	@media screen and (max-width: 576px) {
		width: 100%;
	}
`;

export const TimerWrapper = styled.div`
	width: 100%;
	padding: 30px;
	border-radius: 20px;
	border-radius: 20px;
	background: rgba(59, 59, 59, 0.5);
	backdrop-filter: blur(5px);
`;

export const TimerLabel = styled.div`
	font-family: Space Mono;
	font-size: 12px;
	font-weight: 400;
	line-height: 110%; /* 13.2px */

	margin-bottom: 10px;
`;

export const TimerTable = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TimerTableColumn = styled.div``;

export const TimerCountValue = styled.div`
	font-family: Space Mono;
	font-size: 38px;
	font-weight: 700;
	line-height: 120%; /* 45.6px */
	text-transform: capitalize;
	margin-bottom: 5px;
`;

export const TimerCountLabel = styled.div`
	font-family: Space Mono;
	font-size: 12px;
	font-weight: 400;
	line-height: 110%; /* 13.2px */
`;

export const TimerTableDivider = styled.div`
	font-family: Space Mono;
	font-size: 28px;
	font-weight: 700;
	line-height: 140%; /* 39.2px */
	text-transform: capitalize;
`;
