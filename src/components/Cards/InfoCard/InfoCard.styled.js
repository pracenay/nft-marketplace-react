import styled from 'styled-components';

export const InfoCardWrapper = styled.div`
	position: relative;
	width: 100%;

	background-color: var(--color-bg-secondary);
	border-radius: 20px;
	overflow: hidden;

	padding: 10px 30px 30px;

	@media screen and (max-width: 991px) {
		padding: 10px 20px 20px;
	}
	@media screen and (max-width: 576px) {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 20px;
	}
`;

export const InfoCardIcon = styled.div`
	margin: 0 auto 20px;
	max-width: 250px;
	width: 100%;
	aspect-ratio: 1/1;
	svg {
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width: 991px) {
		max-width: 160px;
	}

	@media screen and (max-width: 576px) {
		max-width: 100px;

		display: flex;
		align-items: center;
		margin: 0;
		aspect-ratio: 1/1;
		flex-shrink: 0;
	}
`;

export const InfoCardBody = styled.div`
	text-align: center;
	@media screen and (max-width: 991px) {
		text-align: left;
	}
`;

export const InfoCardTitle = styled.div`
	font-size: 22px;
	font-weight: 600;
	line-height: 140%; /* 30.8px */
	text-transform: capitalize;
	margin-bottom: 10px;
	@media screen and (max-width: 991px) {
		font-size: 16px;
	}
`;

export const InfoCardDescription = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 140%; /* 22.4px */

	@media screen and (max-width: 991px) {
		font-size: 12px;
	}
`;
