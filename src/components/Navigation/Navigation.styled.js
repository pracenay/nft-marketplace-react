import styled from 'styled-components';
import { media } from 'src/device';

export const NavigationWrapper = styled.div`
	&& {
		height: 100px;
		display: flex;
		align-items: center;
		width: 100%;

		padding: 0 50px;
		${media.md`
			height: 54px;
		`}
		${media.sm`
			padding: 0 30px;
		`}
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
