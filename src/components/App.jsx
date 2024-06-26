// JSON DATA
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
// Components
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import transactions from './data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// Project

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
