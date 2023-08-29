import styled from 'styled-components';

export const StyledInputBox = styled.div`
	position: relative;
	width: 100%;
	height: 60px;
	background: var(--color-text);
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	button {
		height: 100%;
		@media screen and (max-width: 991px) {
			height: 46px;
		}
	}
	@media screen and (max-width: 991px) {
		height: auto;
		flex-direction: column;
		background: none;
		border-radius: unset;
	}
`;

export const StyledInputField = styled.input`
	width: 100%;
	height: 100%;

	border: none;
	outline: none;

	padding: 16px 20px;

	font-family: Work Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;

	color: var(--color-bg-primary);

	@media screen and (max-width: 991px) {
		background: var(--color-text);
		border-radius: 20px;
		height: 46px;
		margin-bottom: 16px;
	}

	&::placeholder {
		color: var(--color-bg-primary);
	}
`;
