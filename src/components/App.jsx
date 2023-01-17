import User from './User/User';
import user from '../data/user';
import Stats from './Statistic/Stats';
import stats from '../data/stats';
import FriendList from './Friends/FriendList';
import friends from '../data/friends';
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from '../data/transactions';

export default function App(){
  return(
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div >
  );
}
