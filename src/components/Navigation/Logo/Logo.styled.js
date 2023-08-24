import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
	&& {
		display: flex;
		align-items: center;

		color: var(--color-text);
		text-decoration: none;
	}
`;

export const LogoText = styled.div`
	&& {
		display: flex;
		align-items: center;
		margin-left: 12px;
	}
`;
