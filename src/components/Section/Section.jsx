import {
	StyledSection,
	StyledSectionHeading,
	StyledSectionContent,
	ButtonFlexContent,
} from './Section.styled';

import Typography from 'src/components/Typography/Typography';
import Button from 'src/components/Button/Button';
import RocketIcon from 'src/components/Icons/RocketIcon/RocketIcon';

const Section = ({
	children,
	headingTitle,
	headingSubtitle,
	isButtonVisible,
	headingButtonText,
	headingButtonVariant,
	headingButtonIcon,
}) => {
	return (
		<StyledSection>
			<StyledSectionHeading>
				<div>
					<Typography tag="h3" marginBottom={10} fontWeight={600}>
						{headingTitle}
					</Typography>
					<Typography tag="p">{headingSubtitle}</Typography>
				</div>
				{isButtonVisible && (
					<Button size="medium" variant={headingButtonVariant}>
						<ButtonFlexContent>
							{headingButtonIcon}
							{headingButtonText}
						</ButtonFlexContent>
					</Button>
				)}
			</StyledSectionHeading>
			<StyledSectionContent>{children}</StyledSectionContent>
		</StyledSection>
	);
};

export default Section;
