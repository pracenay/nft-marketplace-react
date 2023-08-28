import Container from 'src/components/Container/Container';
import Section from 'src/components/Section/Section';

import InfoCardIconCart from 'src/components/Icons/InfoCardIconCart/InfoCardIconCart';
import InfoCardIconWallet from 'src/components/Icons/InfoCardIconWallet/InfoCardIconWallet';
import InfoCardIconCollection from 'src/components/Icons/InfoCardIconCollection/InfoCardIconCollection';

import InfoCard from 'src/components/Cards/InfoCard/InfoCard';

import { HowItWorksWrapper } from './HowItWorksSection.styled';
const howItWorksData = [
	{
		id: 1,
		icon: <InfoCardIconWallet />,
		title: 'Setup Your wallet',
		description:
			'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
	},
	{
		id: 2,
		icon: <InfoCardIconCollection />,
		title: 'Create Collection',
		description:
			'Upload your work and setup your collection. Add a description, social links and floor price.',
	},
	{
		id: 3,
		icon: <InfoCardIconCart />,
		title: 'Start Earning',
		description:
			'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
	},
];
const HowItWorksSection = () => {
	return (
		<Container>
			<Section headingTitle="How it works" headingSubtitle="Find out how to get started">
				<HowItWorksWrapper>
					{howItWorksData.map((item) => (
						<InfoCard key={item.id} {...item} />
					))}
				</HowItWorksWrapper>
			</Section>
		</Container>
	);
};

export default HowItWorksSection;
