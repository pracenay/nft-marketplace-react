import HeroSection from './HeroSection/HeroSection';
import TrendingCollectionSection from './TrendingCollectionSection/TrendingCollectionSection';
import TopRatedArtistsSection from './TopRatedArtistsSection/TopRatedArtistsSection';
import BrowseCategoriesSection from './BrowseCategoriesSection/BrowseCategoriesSection';
import DiscoverMoreNFTSection from './DiscoverMoreNFTSection/DiscoverMoreNFTSection';
import NFTHighlightSection from './NFTHighlightSection/NFTHighlightSection';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<TrendingCollectionSection />
			<TopRatedArtistsSection />
			<BrowseCategoriesSection />
			<DiscoverMoreNFTSection />
			<NFTHighlightSection />
			<HowItWorksSection />
			{/* <SubscribeSection /> */}
		</>
	);
};

export default HomePage;
