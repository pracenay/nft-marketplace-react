import {
	StyledSection,
	StyledSectionHeading,
	StyledSectionContent,
	SectionTitle,
	SectionSubtitle,
	ButtonFlexContent,
} from './Section.styled';

import Button from 'src/components/Button/Button';

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
			{(headingSubtitle || headingSubtitle) && (
				<StyledSectionHeading>
					<div>
						{headingTitle && <SectionTitle>{headingTitle}</SectionTitle>}
						{headingSubtitle && <SectionSubtitle>{headingSubtitle}</SectionSubtitle>}
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
			)}
			<StyledSectionContent>{children}</StyledSectionContent>
		</StyledSection>
	);
};

export default Section;
