import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryLink = styled(Link)`
	text-decoration: none;
	color: var(--color-text);
`;

export const CategoryCardThumb = styled.div`
	position: relative;
	width: 100%;
	height: 240px;
	overflow: hidden;

	@media screen and (max-width: 991px) {
		height: 142px;
	}
`;

export const CategoryCardThumbImage = styled.div`
	width: 100%;
	height: 100%;

	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 20px 20px 0 0;
	filter: blur(8px);

	transition: background-size var(--animation-speed-fast);
`;

export const CategoryCardThumbIcon = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 991px) {
		svg {
			width: 80px;
			height: 80px;
		}
	}
`;

export const CategoryCardBody = styled.div`
	padding: 20px 30px 25px;
	@media screen and (max-width: 991px) {
		padding: 20px 20px 25px;
	}
`;

export const CategoryCardTitle = styled.div`
	font-size: 22px;
	font-weight: 600;
	line-height: 140%; /* 30.8px */
	text-transform: capitalize;

	@media screen and (max-width: 991px) {
		font-size: 16px;
	}
`;

export const CategoryCardWrapper = styled.div`
	position: relative;
	max-width: 240px;
	width: 100%;

	background-color: var(--color-bg-secondary);
	border-radius: 20px;
	overflow: hidden;
	@media screen and (max-width: 991px) {
		max-width: 330px;
	}
	@media screen and (max-width: 576px) {
		max-width: 100%;
	}

	&:hover {
		${CategoryCardThumbImage} {
			background-size: 120% 120%;
		}
	}
`;
