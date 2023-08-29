import styled from 'styled-components';

export const StyledSection = styled.div`
	padding: 40px 0 80px;
	@media screen and (max-width: 576px) {
		padding: 40px 0;
	}
`;
export const SubscribeWrapper = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	gap: 80px;

	background: var(--color-bg-secondary);
	padding: 60px;
	border-radius: 20px;

	@media screen and (max-width: 991px) {
		gap: 30px;
		padding: 40px 30px;
	}

	@media screen and (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 0;
		background: none;
	}
`;

export const SubscribeColumn = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	height: 100%;
`;

export const SubscribeImageContainer = styled.div`
	max-width: 425px;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	overflow: hidden;
	@media screen and (max-width: 576px) {
		max-width: 100%;
		height: 255px;
	}
`;

export const SubscribeImageItem = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const SubscribeContent = styled.div``;

export const SubscribeTitle = styled.div`
	font-size: 38px;
	font-weight: 600;
	line-height: 120%; /* 45.6px */
	text-transform: capitalize;

	margin-bottom: 10px;
	@media screen and (max-width: 991px) {
		font-size: 28px;
		line-height: 140%; /* 39.2px */
	}
`;

export const SubscribeDescription = styled.div`
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;

	margin-bottom: 40px;
	@media screen and (max-width: 991px) {
		font-size: 16px;
		line-height: 140%; /* 22.4px */
	}
`;

export const SubscribeInput = styled.div`
	position: relative;
`;
