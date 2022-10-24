import PropTypes from 'prop-types';
import * as SC from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <SC.Item>
      <SC.Status isOnline={isOnline}></SC.Status>
      <SC.Avatar src={avatar} alt="User avatar" width="48" />
      <SC.Name>{name}</SC.Name>
    </SC.Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
