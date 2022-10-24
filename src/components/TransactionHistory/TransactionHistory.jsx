import PropTypes from 'prop-types';
import * as SC from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <SC.Table>
      <thead>
        <tr>
          <SC.Th>Type</SC.Th>
          <SC.Th>Amount</SC.Th>
          <SC.Th>Currency</SC.Th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <SC.Tr key={item.id}>
            <SC.Td>{item.type}</SC.Td>
            <SC.Td>{item.amount}</SC.Td>
            <SC.Td>{item.currency}</SC.Td>
          </SC.Tr>
        ))}
      </tbody>
    </SC.Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
