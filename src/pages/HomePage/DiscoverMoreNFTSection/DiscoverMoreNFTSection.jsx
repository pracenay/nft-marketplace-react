import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import EyeIcon from 'src/components/Icons/EyeIcon/EyeIcon';

const DiscoverMoreNFTSection = () => {
	return (
		<Container>
			<Section
				headingTitle="Discover More NFTs"
				headingSubtitle="Explore new trending NFTs"
				isButtonVisible={true}
				headingButtonText="See All"
				headingButtonVariant="outlined"
				headingButtonIcon={<EyeIcon marginRight={10} />}
			></Section>
		</Container>
	);
};

export default DiscoverMoreNFTSection;
