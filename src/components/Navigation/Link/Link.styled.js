import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div``;

export const LinkItem = styled(Link)`
	&& {
		width: auto;
		font-size: var(--font-size-text-base);
		font-weight: 600;
		color: var(--color-text);
		text-decoration: none;

		padding: 12px 20px;
		margin-right: 10px;
	}
`;
