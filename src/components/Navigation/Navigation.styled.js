import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
	&& {
		height: 100px;
		display: flex;
		align-items: center;
		width: 100%;

		padding: 0 50px;
		@media screen and (max-width: 991px) {
			height: 54px;
		}

		@media screen and (max-width: 576px) {
			padding: 0 30px;
		}
	}
`;

export const NavigationRow = styled.div`
	&& {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
`;

export const NavigationLogo = styled.div``;

export const NavigationLinks = styled.div`
	&& {
		display: flex;
		align-items: center;
	}
`;

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
