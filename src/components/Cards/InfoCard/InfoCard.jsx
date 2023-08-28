import {
	InfoCardWrapper,
	InfoCardIcon,
	InfoCardBody,
	InfoCardTitle,
	InfoCardDescription,
} from './InfoCard.styled';
const InfoCard = ({ icon, title, description }) => {
	return (
		<InfoCardWrapper>
			<InfoCardIcon>{icon}</InfoCardIcon>
			<InfoCardBody>
				<InfoCardTitle>{title}</InfoCardTitle>
				<InfoCardDescription>{description}</InfoCardDescription>
			</InfoCardBody>
		</InfoCardWrapper>
	);
};

export default InfoCard;
