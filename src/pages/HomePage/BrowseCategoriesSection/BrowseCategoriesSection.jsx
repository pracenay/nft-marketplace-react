import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import CategoryCard from 'src/components/Cards/CategoryCard/CategoryCard';
import { BrowseCategoriesWrapper } from './BrowseCategoriesSection.styled';
import PaintIcon from 'src/components/Icons/PaintIcon/PaintIcon';
import SwatchesIcon from 'src/components/Icons/SwatchesIcon/SwatchesIcon';
import MusicNoteIcon from 'src/components/Icons/MusicNoteIcon/MusicNoteIcon';
import CameraIcon from 'src/components/Icons/CameraIcon/CameraIcon';
import VideoCameraIcon from 'src/components/Icons/VideoCameraIcon/VideoCameraIcon';
import MagicWandIcon from 'src/components/Icons/MagicWandIcon/MagicWandIcon';
import BasketballIcon from 'src/components/Icons/BasketballIcon/BasketballIcon';
import PlanetIcon from 'src/components/Icons/PlanetIcon/PlanetIcon';

import CategoryCardImage1 from 'src/assets/images/CategoryCardImage1.png';
import CategoryCardImage2 from 'src/assets/images/CategoryCardImage2.png';
import CategoryCardImage3 from 'src/assets/images/CategoryCardImage3.png';
import CategoryCardImage4 from 'src/assets/images/CategoryCardImage4.png';
import CategoryCardImage5 from 'src/assets/images/CategoryCardImage5.png';
import CategoryCardImage6 from 'src/assets/images/CategoryCardImage6.png';
import CategoryCardImage7 from 'src/assets/images/CategoryCardImage7.png';
import CategoryCardImage8 from 'src/assets/images/CategoryCardImage8.png';

const categories = [
	{
		id: 1,
		categoryTitle: 'Art',
		link: 'art',
		icon: <PaintIcon />,
		bgImage: CategoryCardImage1,
	},
	{
		id: 2,
		categoryTitle: 'Collectibles',
		link: 'collectibles',
		icon: <SwatchesIcon />,
		bgImage: CategoryCardImage2,
	},
	{
		id: 3,
		categoryTitle: 'Music',
		link: 'music',
		icon: <MusicNoteIcon />,
		bgImage: CategoryCardImage3,
	},
	{
		id: 4,
		categoryTitle: 'Photography',
		link: 'photography',
		icon: <CameraIcon />,
		bgImage: CategoryCardImage4,
	},
	{
		id: 5,
		categoryTitle: 'Video',
		link: 'video',
		icon: <VideoCameraIcon />,
		bgImage: CategoryCardImage5,
	},
	{
		id: 6,
		categoryTitle: 'Utility',
		link: 'utility',
		icon: <MagicWandIcon />,
		bgImage: CategoryCardImage6,
	},
	{
		id: 7,
		categoryTitle: 'Sport',
		link: 'sport',
		icon: <BasketballIcon />,
		bgImage: CategoryCardImage7,
	},
	{
		id: 8,
		categoryTitle: 'Virtual Worlds',
		link: 'virtual-worlds',
		icon: <PlanetIcon />,
		bgImage: CategoryCardImage8,
	},
];
const BrowseCategoriesSection = () => {
	return (
		<Container>
			<Section headingTitle="Browse Categories">
				<BrowseCategoriesWrapper>
					{categories.map((category) => (
						<CategoryCard key={category.id} {...category} />
					))}
				</BrowseCategoriesWrapper>
			</Section>
		</Container>
	);
};

export default BrowseCategoriesSection;
