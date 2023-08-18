import { UserForm } from "./Profile/UserForm";
import user from "../user.json"
import data from "../data.json"
import friend from '../friends.json'
import transaction from '../transactions.json'
import { Statistics } from "./Profile/Statistics/Statistics";



export const App = () => {
  return (
    <div>
      <UserForm items={user} />
      <Statistics dataItems = {data}/>
      
    </div>
  );
};
