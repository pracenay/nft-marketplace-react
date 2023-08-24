import { LinkWrapper, LinkItem } from './Link.styled';
const Link = ({ text, href }) => {
	return (
		<LinkWrapper>
			<LinkItem to={href}>{text}</LinkItem>
		</LinkWrapper>
	);
};

export default Link;
