import styled from 'styled-components';

export const StatsRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

export const StatsItem = styled.div`
	flex: 1;
	width: 100%;
`;

export const StatsItemCount = styled.div`
	color: var(--color-text);
	font-family: Space Mono;
	font-size: ${({ countFontSize }) => `${countFontSize}px`};
	font-style: normal;
	font-weight: 700;
	line-height: 140%;
	text-transform: capitalize;
	@media screen and (max-width: 991px) {
		font-size: 22px;
		line-height: 160%; /* 35.2px */
	}
`;

export const StatsItemTitle = styled.div`
	font-size: ${({ labelFontSize }) => `${labelFontSize}px`};
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
	text-transform: capitalize;
	@media screen and (max-width: 991px) {
		font-size: 16px;
		line-height: 140%; /* 22.4px */
	}
`;
