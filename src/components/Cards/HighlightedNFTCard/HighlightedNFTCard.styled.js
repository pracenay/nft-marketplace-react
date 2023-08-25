import styled from 'styled-components';
import { media } from 'src/device';
export const CardWrapper = styled.div`
	width: 100%;
	height: auto;
	border-radius: 20px;
	overflow: hidden;
	@media screen and (max-width: 576px) {
		margin-bottom: 40px;
	}
`;

export const CardThumbnail = styled.div`
	width: 100%;
	height: 400px;
	@media screen and (max-width: 991px) {
		height: 220px;
	}
	@media screen and (max-width: 576px) {
		height: 206px;
	}
`;

export const CardThumbnailImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CardBody = styled.div`
	padding: 22px 20px;
	background: var(--color-bg-secondary);
`;

export const CardTitle = styled.div`
	font-size: 22px;
	line-height: 31px;
	font-weight: 600;

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	margin-bottom: 10px;
`;

export const CardArtist = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 12px;
`;

export const CardArtistAvatar = styled.div`
	flex-shrink: 0;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	overflow: hidden;
`;

export const CardArtistAvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CardArtistName = styled.div`
	font-size: 16px;
	line-height: 22px;
	font-weight: 400;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
