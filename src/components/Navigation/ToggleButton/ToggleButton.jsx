import { useState } from 'react';
import { ToggleWrapper, ToggleLine } from './ToggleButton.styled';
const ToggleButton = () => {
	const [active, setActive] = useState(false);

	const handleButtonActive = () => {
		setActive((prev) => !prev);
	};
	return (
		<ToggleWrapper className={`${active ? 'active' : ''}`} onClick={handleButtonActive}>
			<ToggleLine></ToggleLine>
			<ToggleLine></ToggleLine>
			<ToggleLine></ToggleLine>
		</ToggleWrapper>
	);
};

export default ToggleButton;
