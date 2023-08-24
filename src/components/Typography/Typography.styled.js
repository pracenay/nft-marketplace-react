import { createElement } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'src/device';

export const Typography = styled(({ tag, children, ...props }) =>
	createElement(tag, props, children)
)`
	&& {
		font-family: 'Work Sans', sans-serif;
		font-size: var(--font-size-text-base);
		font-weight: 400;
		${(props) =>
			props.tag === 'p' &&
			css`
				font-size: var(--font-size-text-body);
			`}
		${media.md`
				font-size: var(--font-size-text-base);
		`}

		${(props) =>
			props.tag === 'h1' &&
			css`
				font-size: var(--font-size-heading-xlg);
				${media.md`
					font-size: var(--font-size-heading-lg);
				`}
			`}
			
		${(props) =>
			props.tag === 'h2' &&
			css`
				font-size: var(--font-size-heading-lg);
				${media.md`
					font-size: var(--font-size-heading-md);
				`}
			`}
			
		${(props) =>
			props.tag === 'h3' &&
			css`
				font-size: var(--font-size-heading-md);
				${media.md`
					font-size: var(--font-size-heading-sm);
				`}
			`}
			
		${(props) =>
			props.tag === 'h4' &&
			css`
				font-size: var(--font-size-heading-sm);
			`}
		${(props) =>
			props.tag === 'h5' &&
			css`
				font-size: var(--font-size-heading-xsm);
			`}
		${(props) =>
			props.tag === 'span' &&
			css`
				font-size: var(--font-size-text-caption);
			`};
	}
`;
