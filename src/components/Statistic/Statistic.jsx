import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { StatsRow, StatsItem, StatsItemCount, StatsItemTitle } from './Statistic.styled';

const Statistic = ({ data, countFontSize, labelFontSize, ...props }) => {
	const [statisticData, setStatisticData] = useState(null);
	useEffect(() => {
		setStatisticData(data);
	}, [data]);

	const parseStatisticValue = (object) => {
		let result = null;
		// const statsLabel = object.label.toLowerCase();
		const statsValue = parseInt(object.count);

		if (statsValue > 50 && statsValue < 1000) {
			const hundreds = statsValue % 10 === 0 ? statsValue : Math.floor(statsValue / 10) * 10 + '+';
			result = hundreds;
		} else if (statsValue > 1000) {
			const thousands = Math.floor(statsValue / 1000);
			result = thousands + 'k+';
		} else {
			result = statsValue;
		}
		return result;
	};
	return (
		<StatsRow style={{ ...props }}>
			{statisticData?.map((item) => (
				<StatsItem key={`stats-item-${item.id}`}>
					<StatsItemCount countFontSize={countFontSize}>{parseStatisticValue(item)}</StatsItemCount>
					<StatsItemTitle labelFontSize={labelFontSize}>{item.label}</StatsItemTitle>
				</StatsItem>
			))}
		</StatsRow>
	);
};

Statistic.propTypes = {
	data: PropTypes.array,
	countFontSize: PropTypes.number || PropTypes.string,
	labelFontSize: PropTypes.number || PropTypes.string,
};

export default Statistic;
