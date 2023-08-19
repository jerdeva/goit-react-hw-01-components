import { UserForm } from "./Profile/UserForm";
import user from "../user.json"
import data from "../data.json"
import friend from '../friends.json'
import transaction from '../transactions.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";



export const App = () => {
  return (
    <div>
      <UserForm items={user} />
      <Statistics dataItems = {data}/>
      <FriendList friendList={friend} />
      <TransactionHistory  transaction ={transaction} />

    </div>
  );
};
