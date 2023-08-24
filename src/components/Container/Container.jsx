import { StyledContainer } from './Container.styled';
const Container = ({ children, ...props }) => {
	return <StyledContainer style={{ ...props }}>{children}</StyledContainer>;
};

export default Container;
