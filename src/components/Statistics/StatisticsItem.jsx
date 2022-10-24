import PropTypes from 'prop-types';
import * as SC from './Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <SC.Item bg={getRandomHexColor()}>
      <span>{label}</span>
      <SC.Percentage>{percentage}%</SC.Percentage>
    </SC.Item>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const colors = [
  '6b2238',
  '95313f',
  'd05044',
  'ff8b57',
  'ffd661',
  'ec579c',
  'c8bf3f',
  '006370',
];
let preColor = '';

function getRandomHexColor() {
  let randomColor = `#${colors[Math.floor(Math.random() * 8)]}`;
  if (randomColor !== preColor) {
    preColor = randomColor;

    return randomColor;
  } else return (randomColor = '#55334f');
}
