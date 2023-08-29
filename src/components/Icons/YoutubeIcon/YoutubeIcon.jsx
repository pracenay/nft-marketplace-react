const YoutubeIcon = ({ width, height }) => {
	return (
		<svg
			width={width ? width : 32}
			height={height ? height : 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.8211 11.1183C14.1463 10.9443 14.5408 10.9634 14.8477 11.168L20.8477 15.168C21.1259 15.3534 21.293 15.6656 21.293 16C21.293 16.3344 21.1259 16.6466 20.8477 16.8321L14.8477 20.8321C14.5408 21.0366 14.1463 21.0557 13.8211 20.8817C13.496 20.7077 13.293 20.3688 13.293 20V12C13.293 11.6312 13.496 11.2923 13.8211 11.1183ZM15.293 13.8685V18.1315L18.4902 16L15.293 13.8685Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.2915 5.05082L16.2746 5.05078L16.2118 5.05081C16.1573 5.05093 16.0779 5.05133 15.9761 5.05241C15.7724 5.05457 15.4786 5.05947 15.1136 5.07043C14.3841 5.09232 13.3675 5.13847 12.2167 5.23563C9.9403 5.42782 7.04225 5.82669 4.81105 6.6792L4.79635 6.68495C4.35808 6.86039 3.96717 7.13637 3.65515 7.49064C3.34313 7.84491 3.11874 8.26755 3.00008 8.72447L2.99911 8.72824C2.6877 9.9468 2.29297 12.2065 2.29297 16.0008C2.29297 19.7952 2.6877 22.0549 2.99911 23.2734L3.00008 23.2772C3.11874 23.7341 3.34313 24.1568 3.65515 24.511C3.96717 24.8653 4.35807 25.1413 4.79635 25.3167L4.81105 25.3225C7.04225 26.175 9.9403 26.5739 12.2167 26.766C13.3675 26.8632 14.3841 26.9094 15.1136 26.9312C15.4786 26.9422 15.7724 26.9471 15.9761 26.9493C16.0779 26.9504 16.1573 26.9507 16.2118 26.9509L16.2746 26.9509L16.2915 26.9509H16.2945L16.3113 26.9509L16.3741 26.9509C16.4286 26.9507 16.508 26.9504 16.6099 26.9493C16.8135 26.9471 17.1074 26.9422 17.4724 26.9312C18.2018 26.9094 19.2184 26.8632 20.3693 26.766C22.6456 26.5739 25.5437 26.175 27.7749 25.3225L27.7896 25.3167C28.2279 25.1413 28.6188 24.8653 28.9308 24.511C29.2428 24.1568 29.4672 23.7341 29.5859 23.2772L29.5868 23.2734C29.8982 22.0549 30.293 19.7952 30.293 16.0008C30.293 12.2065 29.8982 9.9468 29.5868 8.72824L29.5859 8.72447C29.4672 8.26755 29.2428 7.84491 28.9308 7.49064C28.6188 7.13637 28.2279 6.86039 27.7896 6.68495L27.7749 6.6792C25.5437 5.82669 22.6456 5.42782 20.3693 5.23563C19.2184 5.13847 18.2018 5.09232 17.4724 5.07043C17.1074 5.05947 16.8135 5.05457 16.6099 5.05241C16.508 5.05133 16.4286 5.05093 16.3741 5.05081L16.3113 5.05078L16.2945 5.05082H16.2915ZM16.2877 24.9509L16.2984 24.9508L16.3016 24.9509L16.3147 24.9509L16.3697 24.9509C16.4188 24.9508 16.4926 24.9504 16.5886 24.9494C16.7807 24.9473 17.0616 24.9427 17.4124 24.9321C18.1146 24.9111 19.0941 24.8666 20.201 24.7731C22.4371 24.5843 25.0971 24.2028 27.0526 23.4574C27.1974 23.3984 27.3265 23.3066 27.4299 23.1892C27.5344 23.0705 27.6097 22.929 27.6497 22.7761C27.9132 21.7438 28.293 19.6539 28.293 16.0008C28.293 12.3478 27.9132 10.2578 27.6497 9.22562C27.6097 9.07265 27.5344 8.93117 27.4299 8.81251C27.3265 8.69512 27.1974 8.60331 27.0526 8.54424C25.0971 7.79889 22.4371 7.41733 20.201 7.22854C19.0941 7.13509 18.1146 7.09061 17.4124 7.06953C17.0616 7.059 16.7807 7.05433 16.5886 7.0523C16.4926 7.05128 16.4188 7.05092 16.3697 7.05081L16.3147 7.05078L16.3016 7.05081L16.2987 7.05082L16.2876 7.05088L16.2844 7.05081L16.2713 7.05078L16.2163 7.05081C16.1671 7.05092 16.0933 7.05128 15.9973 7.0523C15.8052 7.05433 15.5244 7.059 15.1736 7.06953C14.4713 7.09061 13.4918 7.13509 12.3849 7.22854C10.1489 7.41733 7.48887 7.79889 5.53336 8.54424C5.38858 8.60331 5.25942 8.69513 5.15603 8.81251C5.05152 8.93117 4.97626 9.07265 4.93627 9.22562C4.6727 10.2578 4.29297 12.3478 4.29297 16.0008C4.29297 19.6539 4.6727 21.7438 4.93627 22.7761C4.97626 22.929 5.05152 23.0705 5.15603 23.1892C5.25942 23.3066 5.38857 23.3984 5.53335 23.4574C7.48886 24.2028 10.1489 24.5843 12.3849 24.7731C13.4918 24.8666 14.4713 24.9111 15.1736 24.9321C15.5244 24.9427 15.8052 24.9473 15.9973 24.9494C16.0933 24.9504 16.1671 24.9508 16.2163 24.9509L16.2713 24.9509L16.2844 24.9509L16.2877 24.9509Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default YoutubeIcon;
