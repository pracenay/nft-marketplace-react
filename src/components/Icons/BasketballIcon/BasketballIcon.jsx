import React from 'react';

const BasketballIcon = ({ width, height, color }) => {
	return (
		<svg
			width={width ? width : 100}
			height={height ? height : 100}
			viewBox="0 0 80 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.75 18.8135C24.3592 24.4373 27.5064 32.058 27.5 40.001C27.5064 47.944 24.3592 55.5646 18.75 61.1885"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M61.2502 18.8135C55.6474 24.4415 52.502 32.0596 52.502 40.001C52.502 47.9424 55.6474 55.5605 61.2502 61.1885"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 40H70"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M40 10V70"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default BasketballIcon;
