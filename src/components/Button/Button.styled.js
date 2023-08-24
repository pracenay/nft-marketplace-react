import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
	&& {
		width: auto;

		border: none;
		border-radius: 20px;
		font-family: 'Work Sans', sans-serif;
		font-size: 14px;
		font-weight: 600;
		height: 46px;
		line-height: 1.4;

		padding: 0 50px;

		position: relative;
		text-align: center;
		text-transform: none;

		user-select: none;
		vertical-align: middle;

		cursor: pointer;
		${(props) =>
			props.variant === 'primary' &&
			css`
				color: var(--color-text);
				background: var(--color-cta);
			`}

		${(props) =>
			props.variant === 'outlined' &&
			css`
				border: 1px solid var(--color-cta);
				color: var(--color-cta);
				background-color: transparent;
			`}
        ${(props) =>
			props.size === 'large' &&
			css`
				font-size: 22px;
				height: 72px;
			`}
        ${(props) =>
			props.size === 'medium' &&
			css`
				font-size: 16px;
				height: 60px;
			`}
        ${(props) =>
			props.size === 'small' &&
			css`
				font-size: 16px;
				height: 46px;
			`}
	}
`;
