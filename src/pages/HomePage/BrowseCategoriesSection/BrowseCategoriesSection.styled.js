import styled from 'styled-components';

export const BrowseCategoriesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px;

	@media screen and (max-width: 576px) {
		grid-template-columns: repeat(2, 1fr);

		gap: 20px;
	}
`;
