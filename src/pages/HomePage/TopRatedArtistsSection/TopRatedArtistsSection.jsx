import { useState, useEffect } from 'react';
import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import RocketIcon from 'src/components/Icons/RocketIcon/RocketIcon';
import ArtistCardAvatar from 'src/assets/images/ArtistCardAvatar.png';
import ArtistCard from 'src/components/Cards/ArtistCard/ArtistCard';
import Button from 'src/components/Button/Button';

import { useMediaQuery } from '@uidotdev/usehooks';
import { TopArtistsWrapper } from './TopRatedArtistsSection.styled';
import { ButtonFlexContent, ButtonMobileWrapper } from '../../common';

const artistsData = [
	{
		id: 1,
		artistAvatar: ArtistCardAvatar,
		artistName: 'DigiLab',
		totalSales: 34.53,
	},
	{
		id: 2,
		artistAvatar: ArtistCardAvatar,
		artistName: 'DigiLab',
		totalSales: 16.22,
	},
	{
		id: 3,
		artistAvatar: ArtistCardAvatar,
		artistName: 'DigiLab',
		totalSales: 3.11,
	},
	{
		id: 4,
		artistAvatar: ArtistCardAvatar,
		artistName: 'DigiLab',
		totalSales: 34.53,
	},
	{
		id: 5,
		artistAvatar: ArtistCardAvatar,
		artistName: 'DigiLab',
		totalSales: 16.22,
	},
	{
		id: 6,
		artistAvatar: ArtistCardAvatar,
		artistName: 'Mr Fox',
		totalSales: 19.28,
	},
	{
		id: 7,
		artistAvatar: ArtistCardAvatar,
		artistName: 'MrFox',
		totalSales: 34.53,
	},
	{
		id: 8,
		artistAvatar: ArtistCardAvatar,
		artistName: 'MrFox',
		totalSales: 16.22,
	},
	{
		id: 9,
		artistAvatar: ArtistCardAvatar,
		artistName: 'MrFox',
		totalSales: 3.11,
	},
];
const TopRatedArtistsSection = () => {
	const [data, setData] = useState(artistsData);

	const isTablet = useMediaQuery('only screen and (min-width : 576px) and (max-width : 990px)');
	const isMobile = useMediaQuery('only screen and (max-width : 576px)');

	useEffect(() => {
		if (isTablet) {
			setData(artistsData.slice(0, 6));
		} else if (isMobile) {
			setData(artistsData.slice(0, 5));
		} else {
			setData(artistsData);
		}
	});

	return (
		<Container>
			<Section
				headingTitle="Top creators"
				headingSubtitle="Checkout Top Rated Creators on the NFT Marketplace"
				isButtonVisible={true}
				headingButtonText="View Rankings"
				headingButtonVariant="outlined"
				headingButtonIcon={<RocketIcon marginRight={10} />}
			>
				<TopArtistsWrapper>
					{data.map((item, index) => (
						<ArtistCard key={item.id} {...item} index={index + 1} />
					))}
				</TopArtistsWrapper>
				{isMobile && (
					<ButtonMobileWrapper>
						<Button size="medium" variant="outlined" marginTop={isMobile && '40px'}>
							<ButtonFlexContent>
								<RocketIcon marginRight={10} />
								View Rankings
							</ButtonFlexContent>
						</Button>
					</ButtonMobileWrapper>
				)}
			</Section>
		</Container>
	);
};

export default TopRatedArtistsSection;
