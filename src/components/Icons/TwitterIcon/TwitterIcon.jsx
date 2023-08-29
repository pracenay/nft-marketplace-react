const TwitterIcon = ({ width, height }) => {
	return (
		<svg
			width={width ? width : 32}
			height={height ? height : 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.2927 11.0005C16.2927 8.25045 18.6052 5.96295 21.3552 6.00045C22.3182 6.01157 23.2576 6.3006 24.0603 6.8328C24.863 7.365 25.495 8.11771 25.8802 9.00045H30.2927L26.2552 13.038C25.9946 17.0937 24.1993 20.8979 21.2342 23.6773C18.269 26.4566 14.3567 28.0025 10.2927 28.0005C6.29267 28.0005 5.29267 26.5005 5.29267 26.5005C5.29267 26.5005 9.29267 25.0005 11.2927 22.0005C11.2927 22.0005 3.29267 18.0005 5.29267 7.00045C5.29267 7.00045 10.2927 12.0005 16.2927 13.0005V11.0005Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default TwitterIcon;
