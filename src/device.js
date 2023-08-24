import { css } from 'styled-components';

const devices = {
	xs: '375px',
	sm: '576px',
	md: '991px',
	lg: '1280px',
	xl: '1440px',
	xxl: '1920px',
};

export const media = {
	xs: (...args) => css`
		@media (max-width: ${devices.xs}) {
			${css(...args)};
		}
	`,
	sm: (...args) => css`
		@media (max-width: ${devices.sm}) {
			${css(...args)};
		}
	`,
	md: (...args) => css`
		@media (max-width: ${devices.md}) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (max-width: ${devices.lg}) {
			${css(...args)};
		}
	`,
	xl: (...args) => css`
		@media (max-width: ${devices.xl}) {
			${css(...args)};
		}
	`,
	xxl: (...args) => css`
		@media (max-width: ${devices.xxl}) {
			${css(...args)};
		}
	`,
};
