import { Profile } from './Profile/Profile';
import userInfo from '../data/user';
import data from '../data/data';
import transactions from '../data/transactions';
import { Box } from './Box';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box bg="body" p={6}>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics title={'Upload Stats'} stats={data} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
