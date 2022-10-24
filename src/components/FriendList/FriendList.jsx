import * as SC from './FriendList.styled';
import friends from '../../data/friends';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <SC.FriendList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.name}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </SC.FriendList>
  );
};
