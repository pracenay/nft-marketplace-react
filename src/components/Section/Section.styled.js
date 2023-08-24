import styled from 'styled-components';

export const StyledSection = styled.section`
	width: 100%;
	height: 100%;
	padding: 80px 0;
	background: var(--color-bg);
	color: inherit;
`;

export const StyledSectionHeading = styled.div`
	&& {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 60px;
	}
`;

export const StyledSectionContent = styled.div`
	&& {
		margin-top: 60px;
	}
`;

export const ButtonFlexContent = styled.div`
	&& {
		display: flex;
		align-items: center;
	}
`;
