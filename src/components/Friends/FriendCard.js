import { FriendBio } from './Friend.styled';
import {StatusActiv} from './Friend.styled'


export const FriendCard = ({ friendInfo:{isOnline,avatar,name } }) => {
  return (
    <FriendBio>
      <StatusActiv status={(isOnline)}>{isOnline} </StatusActiv>
      <img
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p >{name}</p>
    </FriendBio>
  );
};
