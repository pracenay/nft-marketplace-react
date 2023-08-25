import { useEffect, useState } from 'react';
import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import CollectionCard from 'src/components/Cards/CollectionCard/CollectionCard';

import { TrendingCollectionCards } from './TrendingCollectionSection.styled';
import PrimaryPhotoPlaceholder from 'src/assets/images/PrimaryPhotoPlaceholder.png';
import SecondaryPhotoPlaceholder from 'src/assets/images/SecondaryPhotoPlaceholder.png';
import SecondaryPhotoPlaceholder2 from 'src/assets/images/SecondaryPhotoPlaceholder2.png';
import AvatarPlaceholder from 'src/assets/images/AvatarPlaceholder.png';
import { useMediaQuery } from '@uidotdev/usehooks';
const collectionCardsData = [
	{
		id: 1,
		collectionTitle: 'abc',
		artistName: 'MrFox',
		artistAvatar: AvatarPlaceholder,
		images: [
			{
				id: 11,
				src: PrimaryPhotoPlaceholder,
			},
			{
				id: 12,
				src: SecondaryPhotoPlaceholder,
			},
			{
				id: 13,
				src: SecondaryPhotoPlaceholder2,
			},
		],
	},
	{
		id: 2,
		collectionTitle: 'abc',
		artistName: 'MrFox',
		artistAvatar: AvatarPlaceholder,
		images: [
			{
				id: 11,
				src: PrimaryPhotoPlaceholder,
			},
			{
				id: 12,
				src: SecondaryPhotoPlaceholder,
			},
			{
				id: 13,
				src: SecondaryPhotoPlaceholder2,
			},
		],
	},
	{
		id: 3,
		collectionTitle: 'abc',
		artistName: 'MrFox',
		artistAvatar: AvatarPlaceholder,
		images: [
			{
				id: 11,
				src: PrimaryPhotoPlaceholder,
			},
			{
				id: 12,
				src: SecondaryPhotoPlaceholder,
			},
			{
				id: 13,
				src: SecondaryPhotoPlaceholder2,
			},
		],
	},
];

const TrendingCollectionSection = () => {
	const [data, setData] = useState(collectionCardsData);
	const isTablet = useMediaQuery('only screen and (min-width : 576px) and (max-width : 990px)');
	const isMobile = useMediaQuery('only screen and (max-width : 576px)');

	useEffect(() => {
		if (isTablet) {
			setData(collectionCardsData.slice(0, 2));
		} else if (isMobile) {
			setData(collectionCardsData.slice(0, 1));
		} else {
			setData(collectionCardsData);
		}
	});
	return (
		<Container>
			<Section
				headingTitle="Trending Collection"
				headingSubtitle="Checkout our weekly updated trending collection."
			>
				<TrendingCollectionCards>
					{data.map((item, index) => (
						<CollectionCard key={item.id} {...item} index={index} />
					))}
				</TrendingCollectionCards>
			</Section>
		</Container>
	);
};

export default TrendingCollectionSection;
