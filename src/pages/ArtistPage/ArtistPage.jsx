import ArtistSocial from './ArtistSocial';
import {
	DetailsWrapper,
	DetailsBackground,
	DetailsContent,
	DetailsBackgroundImage,
	DetailsAvatar,
	DetailsAvatarContainer,
	ArtistAvatarImage,
	DetailsContentWrapper,
	DetailsContentInfo,
	DetailsContentActions,
	ArtistInfoItem,
	ArtistNickname,
	ArtistBio,
	DetailsLabel,
	ArtistSocials,
	ArtistBioText,
	DetailsActionButton,
} from './ArtistPage.styled';

import Statistic from 'src/components/Statistic/Statistic';
import Container from 'src/components/Container/Container';
import Button from 'src/components/Button/Button';
import CopyIcon from 'src/components/Icons/CopyIcon/CopyIcon';
import CheckIcon from 'src/components/Icons/CheckIcon/CheckIcon';
import PlusIcon from 'src/components/Icons/PlusIcon/PlusIcon';
import { artistStatisticData } from 'src/constants';
import artistPageBg from 'src/assets/images/artistPageBg.png';
import artistPageAvatar from 'src/assets/images/artistPageAvatar.png';

import { useCopyToClipboard } from '@uidotdev/usehooks';
import { randomHash } from 'src/constants';
const ArtistPage = () => {
	const [copiedText, copyToClipboard] = useCopyToClipboard();

	const hasCopiedText = Boolean(copiedText);

	return (
		<DetailsWrapper>
			<DetailsBackground>
				<DetailsBackgroundImage src={artistPageBg} />
				<Container position="relative">
					<DetailsAvatar>
						<DetailsAvatarContainer>
							<ArtistAvatarImage src={artistPageAvatar} />
						</DetailsAvatarContainer>
					</DetailsAvatar>
				</Container>
			</DetailsBackground>

			<DetailsContent>
				<Container>
					<DetailsContentWrapper>
						<DetailsContentInfo>
							<ArtistInfoItem>
								<ArtistNickname>Animakid</ArtistNickname>
							</ArtistInfoItem>
							<ArtistInfoItem>
								<Statistic
									data={artistStatisticData}
									maxWidth={510}
									countFontSize={28}
									labelFontSize={22}
								/>
							</ArtistInfoItem>
							<ArtistInfoItem>
								<ArtistBio>
									<DetailsLabel>Bio</DetailsLabel>
									<ArtistBioText>The internet's friendliest designer kid.</ArtistBioText>
								</ArtistBio>
							</ArtistInfoItem>
							<ArtistInfoItem>
								<DetailsLabel>Links</DetailsLabel>
								<ArtistSocial />
							</ArtistInfoItem>
						</DetailsContentInfo>
						<DetailsContentActions>
							<DetailsActionButton onClick={() => copyToClipboard(randomHash)}>
								<Button disabled={hasCopiedText} variant="primary" size="medium" padding="0 20px">
									{hasCopiedText ? <CheckIcon /> : <CopyIcon />}
									{randomHash}
								</Button>
							</DetailsActionButton>
							<DetailsActionButton>
								<Button disabled={hasCopiedText} variant="outlined" size="medium" padding="0 30px">
									<PlusIcon />
									Follow
								</Button>
							</DetailsActionButton>
						</DetailsContentActions>
					</DetailsContentWrapper>
				</Container>
			</DetailsContent>
		</DetailsWrapper>
	);
};

export default ArtistPage;
