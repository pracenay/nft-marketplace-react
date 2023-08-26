import {
	CategoryCardWrapper,
	CategoryLink,
	CategoryCardThumb,
	CategoryCardThumbImage,
	CategoryCardThumbIcon,
	CategoryCardBody,
	CategoryCardTitle,
} from './CategoryCard.styled';

const CategoryCard = ({ categoryTitle, link, icon, bgImage }) => {
	return (
		<CategoryCardWrapper>
			<CategoryLink to={`/categories/${link}`}>
				<CategoryCardThumb>
					<CategoryCardThumbImage backgroundImage={bgImage}></CategoryCardThumbImage>
					<CategoryCardThumbIcon>{icon}</CategoryCardThumbIcon>
				</CategoryCardThumb>
				<CategoryCardBody>
					<CategoryCardTitle>{categoryTitle}</CategoryCardTitle>
				</CategoryCardBody>
			</CategoryLink>
		</CategoryCardWrapper>
	);
};

export default CategoryCard;
