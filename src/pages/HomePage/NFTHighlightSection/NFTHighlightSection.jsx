import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import Container from 'src/components/Container/Container';
import Button from 'src/components/Button/Button';
import EyeIcon from 'src/components/Icons/EyeIcon/EyeIcon';
import Avatar4 from 'src/assets/images/avatars/Avatar4.png';

import NFTHighlightBg from 'src/assets/images/NFTHighlight.png';
import { ButtonMobileWrapper } from '../../common';

import {
	NFTHighlightWrapper,
	NFTHighlightContent,
	NFTHighlightInfo,
	Badge,
	BadgeImage,
	BadgeText,
	NFTHighlightInfoTitle,
	NFTHighlightInfoButton,
	NFTHighlightTimer,
	TimerWrapper,
	TimerLabel,
	TimerTable,
	TimerTableColumn,
	TimerCountValue,
	TimerCountLabel,
	TimerTableDivider,
	Gradient,
} from './NFTHighlightSection.styled';

const NFTHighlightData = {
	id: 1,
	nftImageSrc: NFTHighlightBg,
	artist: {
		id: 11,
		avatar: Avatar4,
		nickname: 'Shroomie',
	},
};

const currentHours = 59 * 60 * 60 * 1000;
const currentMinutes = 59 * 60 * 1000;
const currentSeconds = 59 * 1000;

const targetTime = new Date().getTime() + currentHours + currentMinutes + currentSeconds;

const NFTHighlightSection = () => {
	const [timeRemaining, setTimeRemaining] = useState(targetTime - new Date().getTime());
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentTime = new Date().getTime();
			if (currentTime < targetTime) {
				setTimeRemaining(targetTime - currentTime);

				const totalSeconds = Math.floor(timeRemaining / 1000);
				const remainingSeconds = totalSeconds % 60;
				const remainingMinutes = Math.floor(totalSeconds / 60) % 60;
				const remainingHours = Math.floor(totalSeconds / 3600);

				setHours(remainingHours);
				setMinutes(remainingMinutes);
				setSeconds(remainingSeconds);
			} else {
				clearInterval(interval);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [timeRemaining]);

	const isMobile = useMediaQuery('only screen and (max-width : 576px)');

	return (
		<NFTHighlightWrapper backgroundImage={NFTHighlightData?.nftImageSrc}>
			<Gradient />
			<Container>
				<NFTHighlightContent>
					<NFTHighlightInfo>
						<Badge>
							<BadgeImage src={NFTHighlightData?.artist?.avatar} />
							<BadgeText>{NFTHighlightData?.artist?.nickname}</BadgeText>
						</Badge>
						<NFTHighlightInfoTitle>Magic Mashrooms</NFTHighlightInfoTitle>
						{!isMobile && (
							<NFTHighlightInfoButton>
								<Button size="medium" variant="secondary" marginTop={isMobile && '40px'}>
									<EyeIcon />
									See NFT
								</Button>
							</NFTHighlightInfoButton>
						)}
					</NFTHighlightInfo>
					<NFTHighlightTimer>
						<TimerWrapper>
							<TimerLabel>Auction ends in:</TimerLabel>

							<TimerTable>
								<TimerTableColumn>
									<TimerCountValue>
										{hours < 10 ? '0' : ''}
										{hours}
									</TimerCountValue>
									<TimerCountLabel>Hours</TimerCountLabel>
								</TimerTableColumn>
								<TimerTableDivider>:</TimerTableDivider>
								<TimerTableColumn>
									<TimerCountValue>
										{minutes < 10 ? '0' : ''}
										{minutes}
									</TimerCountValue>
									<TimerCountLabel>Minutes</TimerCountLabel>
								</TimerTableColumn>
								<TimerTableDivider>:</TimerTableDivider>
								<TimerTableColumn>
									<TimerCountValue>
										{seconds < 10 ? '0' : ''}
										{seconds}
									</TimerCountValue>
									<TimerCountLabel>Seconds</TimerCountLabel>
								</TimerTableColumn>
							</TimerTable>
						</TimerWrapper>
					</NFTHighlightTimer>
					{isMobile && (
						<ButtonMobileWrapper>
							<Button size="medium" variant="secondary" marginTop={isMobile && '30px'}>
								<EyeIcon />
								See NFT
							</Button>
						</ButtonMobileWrapper>
					)}
				</NFTHighlightContent>
			</Container>
		</NFTHighlightWrapper>
	);
};

export default NFTHighlightSection;
