import styled from 'styled-components';

export const StyledHeroSection = styled.section`
	width: 100%;
	height: 100%;
	padding: 80px 0;
	background: var(--color-bg);
	color: inherit;
	@media screen and (max-width: 576px) {
		padding: 40px 0;
	}
`;

export const HeroWrapper = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 30px;
`;

export const HeroColumn = styled.div`
	width: calc(50% - 30px / 2);
	@media screen and (max-width: 576px) {
		width: 100%;
	}
`;

export const HeroButton = styled.div`
	margin-bottom: 30px;

	@media screen and (max-width: 991px) {
		margin-bottom: 20px;
	}
	@media screen and (max-width: 576px) {
		margin-bottom: 40px;
	}

	& > button {
		@media screen and (max-width: 576px) {
			width: 100% !important;
		}
	}
`;

export const HeroButtonContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeroTitle = styled.h1`
	font-size: var(--font-size-heading-xlg);
	font-style: normal;
	font-weight: 600;
	line-height: 110%; /* 73.7px */
	text-transform: capitalize;

	margin-bottom: 20px;

	@media screen and (max-width: 991px) {
		font-size: 38px;
		line-height: 120%; /* 45.6px */
	}
	@media screen and (max-width: 576px) {
		font-size: 28px;
		line-height: 140%; /* 39.2px */
		margin-bottom: 10px;
	}
`;

export const HeroSubtitle = styled.p`
	color: var(--color-text);
	font-family: Work Sans;
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;

	margin-bottom: 30px;

	@media screen and (max-width: 991px) {
		font-size: 16px;
		line-height: 140%; /* 22.4px */
		margin-bottom: 20px;
	}
	@media screen and (max-width: 576px) {
		margin-bottom: 40px;
	}
`;
