import { StyledButton } from './Button.styled';

const Button = ({ children, variant, size, style, ariaLabel }) => {
	return (
		<StyledButton variant={variant} size={size} style={style} ariaLabel={ariaLabel}>
			{children}
		</StyledButton>
	);
};

export default Button;
