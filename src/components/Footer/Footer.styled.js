import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: var(--color-bg-secondary);
	padding: 40px 0;
`;

export const FooterContent = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	@media screen and (max-width: 991px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FooterTitle = styled.div`
	font-family: Space Mono;
	font-size: 22px;
	font-weight: 700;
	line-height: 160%; /* 35.2px */
	text-transform: capitalize;
	margin-bottom: 20px;
	@media screen and (max-width: 991px) {
		margin-bottom: 10px;
	}
`;

export const FooterText = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 140%; /* 22.4px */
	color: #ccc;
`;

//-------------------------- Footer Info
export const FooterInfo = styled.div`
	width: 100%;
	padding-right: 84px;
	@media screen and (max-width: 991px) {
		padding-right: 0;
	}
`;

export const FooterLogoWrapper = styled.div`
	margin-bottom: 5px;
`;

export const FooterSocial = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media screen and (max-width: 991px) {
		gap: 15px;
	}
`;

export const FooterSocialItems = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

//-------------------------- Footer Explore

export const FooterExplore = styled.div`
	${FooterTitle} {
		margin-bottom: 25px;
		@media screen and (max-width: 991px) {
			margin-bottom: 20px;
		}
	}
`;

export const FooterSocialItem = styled(Link)`
	width: 32px;
	height: 32px;
	color: var(--color-caption);
	text-decoration: none;
	transition: color var(--animation-speed-fast);
	&:hover {
		color: var(--color-cta);
	}
`;

export const FooterNavigation = styled.div``;

export const FooterNavigationItem = styled(Link)`
	display: block;
	color: #ccc;
	text-decoration: none;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`;

//-------------------------- Footer Subscribe

export const FooterSubscribe = styled.div`
	width: 420px;
	@media screen and (max-width: 991px) {
		width: 100%;
	}
	${FooterTitle} {
		margin-bottom: 25px;
		@media screen and (max-width: 991px) {
			margin-bottom: 20px;
		}
	}

	${FooterText} {
		max-width: 330px;
		margin-bottom: 20px;
		@media screen and (max-width: 991px) {
			max-width: 100%;
		}
	}
`;

//-------------------------- Footer Copyright

export const FooterCopyright = styled.div`
	margin-top: 30px;
	padding-top: 20px;
	border-top: 1px solid var(--color-caption);
`;

export const FooterCopyrightText = styled.div`
	color: #ccc;
	font-family: Work Sans;
	font-size: 12px;
	font-weight: 400;
	line-height: 110%; /* 13.2px */
`;
