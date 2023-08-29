import Container from 'src/components/Container/Container';
import {
	StyledSection,
	SubscribeWrapper,
	SubscribeColumn,
	SubscribeImageContainer,
	SubscribeImageItem,
	SubscribeContent,
	SubscribeTitle,
	SubscribeDescription,
	SubscribeInput,
} from './SubscribeSection.styled';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import SubscribeImage from 'src/assets/images/SubscribeImage.png';

import MailIcon from 'src/components/Icons/MailIcon/MailIcon';
import { ButtonFlexContent } from 'src/pages/common';

const SubscribeSection = () => {
	return (
		<StyledSection>
			<Container>
				<SubscribeWrapper>
					<SubscribeColumn>
						<SubscribeImageContainer>
							<SubscribeImageItem src={SubscribeImage} />
						</SubscribeImageContainer>
					</SubscribeColumn>
					<SubscribeColumn>
						<SubscribeContent>
							<SubscribeTitle>Join our weekly digest</SubscribeTitle>
							<SubscribeDescription>
								Get exclusive promotions & updates straight to your inbox.
							</SubscribeDescription>
							<SubscribeInput>
								<Input>
									<Button variant="primary" flexShrink={0}>
										<ButtonFlexContent>
											<MailIcon width={20} height={20} marginRight={10} />
											Subscribe
										</ButtonFlexContent>
									</Button>
								</Input>
							</SubscribeInput>
						</SubscribeContent>
					</SubscribeColumn>
				</SubscribeWrapper>
			</Container>
		</StyledSection>
	);
};

export default SubscribeSection;
