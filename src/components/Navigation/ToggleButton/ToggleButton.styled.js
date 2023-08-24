import styled from 'styled-components';

export const ToggleLine = styled.span`
	&& {
		width: 24px;
		height: 2px;
		background: var(--color-text);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 12px;
		transition: width var(--animation-speed-fast), transform var(--animation-speed-fast),
			opacity var(--animation-speed-fast);
		&:nth-child(1) {
			width: 12px;
			transform-origin: top left;
			transform: translateY(5px);
		}
		&:nth-child(2) {
			width: 18px;
			transform: translateY(0);
		}
		&:nth-child(3) {
			width: 12px;
			transform-origin: bottom left;
			transform: translateY(-5px);
		}
	}
`;

export const ToggleWrapper = styled.div`
	&& {
		position: relative;
		width: 24px;
		height: 24px;
		&.active {
			${ToggleLine} {
				&:nth-child(1) {
					width: 22px;
					transform: translateY(8px) rotate(-45deg);
				}
				&:nth-child(2) {
					opacity: 0;
					transform: translateY(0) translateX(10px);
				}
				&:nth-child(3) {
					width: 22px;
					transform: translateY(-8px) rotate(45deg);
				}
			}
		}
	}
`;
