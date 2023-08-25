import HighlightedNFTCard from 'src/components/Cards/HighlightedNFTCard/HighlightedNFTCard';

import Container from 'src/components/Container/Container';
import Button from 'src/components/Button/Button';
import {
	StyledHeroSection,
	HeroWrapper,
	HeroColumn,
	HeroTitle,
	HeroSubtitle,
	StatsRow,
	StatsItem,
	StatsItemCount,
	StatsItemTitle,
	HeroButton,
	HeroButtonContent,
} from './HeroSection.styled';

import RocketIcon from 'src/components/Icons/RocketIcon/RocketIcon';
import { useMediaQuery } from '@uidotdev/usehooks';

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

						<StatsRow>
							<StatsItem>
								<StatsItemCount>240k+</StatsItemCount>
								<StatsItemTitle>Total Sale</StatsItemTitle>
							</StatsItem>
							<StatsItem>
								<StatsItemCount>100k+</StatsItemCount>
								<StatsItemTitle>Auctions</StatsItemTitle>
							</StatsItem>
							<StatsItem>
								<StatsItemCount>240k+</StatsItemCount>
								<StatsItemTitle>Artists</StatsItemTitle>
							</StatsItem>
						</StatsRow>
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
