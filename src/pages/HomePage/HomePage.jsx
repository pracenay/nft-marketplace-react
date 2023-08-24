import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';
import RocketIcon from 'src/components/Icons/RocketIcon/RocketIcon';
const HomePage = () => {
	return (
		<>
			<Container>
				<Section
					headingTitle="Trending Collection"
					headingSubtitle="Checkout our weekly updated trending collection."
					isButtonVisible={true}
					headingButtonText="View Rankings"
					headingButtonVariant="outlined"
					headingButtonIcon={<RocketIcon marginRight={10} />}
				></Section>
			</Container>
		</>
	);
};

export default HomePage;
