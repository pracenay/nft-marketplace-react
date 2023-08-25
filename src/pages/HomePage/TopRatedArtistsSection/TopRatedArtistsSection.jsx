import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import RocketIcon from 'src/components/Icons/RocketIcon/RocketIcon';

const TopRatedArtistsSection = () => {
	return (
		<Container>
			<Section
				headingTitle="Top creators"
				headingSubtitle="Checkout Top Rated Creators on the NFT Marketplace"
				isButtonVisible={true}
				headingButtonText="View Rankings"
				headingButtonVariant="outlined"
				headingButtonIcon={<RocketIcon marginRight={10} />}
			></Section>
		</Container>
	);
};

export default TopRatedArtistsSection;
