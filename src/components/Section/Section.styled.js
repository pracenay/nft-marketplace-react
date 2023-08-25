import styled from 'styled-components';

export const StyledSection = styled.section`
	width: 100%;
	height: 100%;
	padding: 80px 0;
	background: var(--color-bg);
	color: inherit;
	@media screen and (max-width: 991px) {
		padding: 40px 0;
	}
`;

export const StyledSectionHeading = styled.div`
	&& {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 60px;
		@media screen and (max-width: 991px) {
			margin-bottom: 40px;
		}
	}
`;

export const StyledSectionContent = styled.div`
	&& {
		/* margin-top: 60px; */
	}
`;

export const SectionTitle = styled.h2`
	color: var(--color-text);
	font-size: 38px;
	font-style: normal;
	font-weight: 600;
	line-height: 120%; /* 45.6px */
	text-transform: capitalize;
	@media screen and (max-width: 991px) {
		font-size: 28px;
		line-height: 140%; /* 39.2px */
	}
`;

export const SectionSubtitle = styled.p`
	color: var(--color-text);
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;

	margin-top: 10px;

	@media screen and (max-width: 991px) {
		font-size: 16px;
		line-height: 140%; /* 22.4px */
	}
`;

export const ButtonFlexContent = styled.div`
	&& {
		display: flex;
		align-items: center;
	}
`;
