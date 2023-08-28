import styled from 'styled-components';

export const HowItWorksWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	@media screen and (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
	}
`;
