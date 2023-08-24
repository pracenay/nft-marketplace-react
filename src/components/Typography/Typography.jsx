import * as S from './Typography.styled';

const Typography = ({ tag = 'p', children, ...props }) => (
	<S.Typography tag={tag} style={{ ...props }}>
		{children}
	</S.Typography>
);

export default Typography;
