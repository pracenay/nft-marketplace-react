import React from 'react';

const PlanetIcon = ({ width, height, color }) => {
	return (
		<svg
			width={width ? width : 100}
			height={height ? height : 100}
			viewBox="0 0 80 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M40 67.5C55.1878 67.5 67.5 55.1878 67.5 40C67.5 24.8122 55.1878 12.5 40 12.5C24.8122 12.5 12.5 24.8122 12.5 40C12.5 55.1878 24.8122 67.5 40 67.5Z"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M57.5627 18.8438C66.219 16.4688 72.719 16.6875 74.6565 20C78.094 25.9688 65.3752 39.7813 46.2502 50.8125C27.1252 61.8438 8.81274 65.9688 5.34399 60C3.43774 56.6875 6.50024 50.9375 12.8752 44.625"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default PlanetIcon;
