import {
	StyledSection,
	StyledSectionHeading,
	StyledSectionContent,
	SectionTitle,
	SectionSubtitle,
} from './Section.styled';

import Button from 'src/components/Button/Button';

import { useMediaQuery } from '@uidotdev/usehooks';

const Section = ({
	children,
	headingTitle,
	headingSubtitle,
	isButtonVisible,
	headingButtonText,
	headingButtonVariant,
	headingButtonIcon,
}) => {
	const isMobile = useMediaQuery('only screen and (max-width : 576px)');
	return (
		<StyledSection>
			{(headingTitle || headingSubtitle) && (
				<StyledSectionHeading>
					<div>
						{headingTitle && <SectionTitle>{headingTitle}</SectionTitle>}
						{headingSubtitle && <SectionSubtitle>{headingSubtitle}</SectionSubtitle>}
					</div>
					{!isMobile && isButtonVisible && (
						<Button size="medium" variant={headingButtonVariant}>
							{headingButtonIcon}
							{headingButtonText}
						</Button>
					)}
				</StyledSectionHeading>
			)}
			<StyledSectionContent>{children}</StyledSectionContent>
		</StyledSection>
	);
};

export default Section;
