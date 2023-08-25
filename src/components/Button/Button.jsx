import { StyledButton } from './Button.styled';

const Button = ({ children, variant, size, ariaLabel, ...props }) => {
	return (
		<StyledButton variant={variant} size={size} ariaLabel={ariaLabel} style={{ ...props }}>
			{children}
		</StyledButton>
	);
};

export default Button;
