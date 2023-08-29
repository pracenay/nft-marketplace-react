import { StyledInputBox, StyledInputField } from './Input.styled';
import Button from 'src/components/Button/Button';
const Input = ({ children }) => {
	return (
		<StyledInputBox>
			<StyledInputField placeholder="Enter your email here" />
			{children}
		</StyledInputBox>
	);
};

export default Input;
