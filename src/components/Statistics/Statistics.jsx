import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import * as SC from './Statistics.styled';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title = '', stats }) => {
  return (
    <Box
      as="section"
      display="inline-block"
      bg="white"
      borderRadius="normal"
      overflow="hidden"
      mb="6"
    >
      {title.length > 0 && <SC.Tilte>{title}</SC.Tilte>}

      <Box as="ul" display="flex">
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
