import { UserForm } from "./UserForm";
import user from "../user.json"



export const App = () => {
  return (
    <div>
      <UserForm items={ user} />
    </div>
  );
};
