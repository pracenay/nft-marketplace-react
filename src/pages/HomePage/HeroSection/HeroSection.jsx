import HighlightedNFTCard from 'src/components/Cards/HighlightedNFTCard/HighlightedNFTCard';

import Container from 'src/components/Container/Container';
import Button from 'src/components/Button/Button';
import {
	StyledHeroSection,
	HeroWrapper,
	HeroColumn,
	HeroTitle,
	HeroSubtitle,
	HeroButton,
	HeroButtonContent,
} from './HeroSection.styled';

import RocketIcon from 'src/components/Icons/RocketIcon/RocketIcon';
import Statistic from 'src/components/Statistic/Statistic';
import { useMediaQuery } from '@uidotdev/usehooks';

import { artistStatisticData } from 'src/constants';

const HeroSection = () => {
	const isMobile = useMediaQuery('only screen and (max-width : 576px)');
	return (
		<Container>
			<StyledHeroSection>
				<HeroWrapper>
					<HeroColumn>
						<HeroTitle>Discover Digital Art & Collect NFTs</HeroTitle>
						<HeroSubtitle>
							NFT Marketplace UI Created With Anima For Figma. Collect, buy and sell art from more
							than 20k NFT artists.
						</HeroSubtitle>

						{isMobile && (
							<HeroColumn>
								<HighlightedNFTCard />
							</HeroColumn>
						)}
						<HeroButton>
							<Button size="medium" variant="primary">
								<HeroButtonContent>
									<RocketIcon color={'var(--color-text)'} marginRight={10} />
									Get Started
								</HeroButtonContent>
							</Button>
						</HeroButton>

						<Statistic data={artistStatisticData} countFontSize={28} labelFontSize={24} />
					</HeroColumn>
					{!isMobile && (
						<HeroColumn>
							<HighlightedNFTCard />
						</HeroColumn>
					)}
				</HeroWrapper>
			</StyledHeroSection>
		</Container>
	);
};

export default HeroSection;
