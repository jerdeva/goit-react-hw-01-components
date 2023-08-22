import { UserForm } from "./Profile/UserForm";
import user from "../Data/user.json"
import data from "../Data/data.json"
import friend from '../Data/friends.json'
import transaction from '../Data/transactions.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";



export const App = () => {
  return (
    <div>
      <UserForm items={user} />
      <Statistics title="UPLOAD STATS" dataItems = {data}/>
      <FriendList friendList={friend} />
      <TransactionHistory  transaction ={transaction} />

    </div>
  );
};
