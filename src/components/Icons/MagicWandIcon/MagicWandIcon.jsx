import React from 'react';

const MagicWandIcon = ({ width, height, color }) => {
	return (
		<svg
			width={width ? width : 100}
			height={height ? height : 100}
			viewBox="0 0 80 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M67.5 40V55"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M60 47.5H75"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M26.25 12.5V25"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 18.75H32.5"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M52.5 57.5V67.5"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M47.5 62.5H57.5"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M58.2575 11.7601L11.7873 58.2303C10.811 59.2066 10.811 60.7895 11.7873 61.7658L18.2507 68.2292C19.227 69.2055 20.8099 69.2055 21.7862 68.2292L68.2564 21.759C69.2327 20.7827 69.2327 19.1998 68.2564 18.2235L61.793 11.7601C60.8167 10.7838 59.2338 10.7838 58.2575 11.7601Z"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M45 25L55 35"
				stroke={`${color ? color : 'var(--color-text)'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default MagicWandIcon;
