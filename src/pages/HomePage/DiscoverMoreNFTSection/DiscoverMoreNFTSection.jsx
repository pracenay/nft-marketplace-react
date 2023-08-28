import { useState, useEffect } from 'react';
import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import NFTCard from 'src/components/Cards/NFTCard/NFTCard';
import EyeIcon from 'src/components/Icons/EyeIcon/EyeIcon';
import Button from 'src/components/Button/Button';

import Avatar4 from 'src/assets/images/avatars/Avatar4.png';
import Avatar10 from 'src/assets/images/avatars/Avatar10.png';
import Avatar15 from 'src/assets/images/avatars/Avatar15.png';

import NFTCardImage1 from 'src/assets/images/NFTCardImage1.png';
import NFTCardImage2 from 'src/assets/images/NFTCardImage2.png';
import NFTCardImage3 from 'src/assets/images/NFTCardImage3.png';

import { DiscoverNFTsWrapper } from './DiscoverMoreNFTSection.styled';
import { ButtonFlexContent, ButtonMobileWrapper } from '../../common';

import { useMediaQuery } from '@uidotdev/usehooks';

const discoverNFTsdata = [
	{
		id: 1,
		src: NFTCardImage1,
		title: 'Distant Galaxy',
		artist: {
			id: 1,
			avatar: Avatar4,
			nickname: 'MoonDancer',
		},
		price: 1.63,
		highestBid: 0.33,
	},
	{
		id: 2,
		src: NFTCardImage2,
		title: 'Life On Edena',
		artist: {
			id: 1,
			avatar: Avatar10,
			nickname: 'NebulaKid',
		},
		price: 1.63,
		highestBid: 0.33,
	},
	{
		id: 3,
		src: NFTCardImage3,
		title: 'AstroFiction',
		artist: {
			id: 1,
			avatar: Avatar15,
			nickname: 'Spaceone',
		},
		price: 1.63,
		highestBid: 0.33,
	},
];
const DiscoverMoreNFTSection = () => {
	const [data, setData] = useState(discoverNFTsdata);

	const isTablet = useMediaQuery('only screen and (min-width : 576px) and (max-width : 990px)');
	const isMobile = useMediaQuery('only screen and (max-width : 576px)');

	useEffect(() => {
		if (isTablet) {
			setData(discoverNFTsdata.slice(0, 2));
		} else if (isMobile) {
			setData(discoverNFTsdata.slice(0, 3));
		} else {
			setData(discoverNFTsdata);
		}
	}, [isMobile, isTablet]);
	return (
		<Container>
			<Section
				headingTitle="Discover More NFTs"
				headingSubtitle="Explore new trending NFTs"
				isButtonVisible={true}
				headingButtonText="See All"
				headingButtonVariant="outlined"
				headingButtonIcon={<EyeIcon marginRight={10} />}
			>
				<DiscoverNFTsWrapper>
					{data.map((item) => (
						<NFTCard key={item.id} {...item} />
					))}
				</DiscoverNFTsWrapper>

				{isMobile && (
					<ButtonMobileWrapper>
						<Button size="medium" variant="outlined" marginTop={isMobile && '40px'}>
							<ButtonFlexContent>
								<EyeIcon marginRight={10} />
								See All
							</ButtonFlexContent>
						</Button>
					</ButtonMobileWrapper>
				)}
			</Section>
		</Container>
	);
};

export default DiscoverMoreNFTSection;
