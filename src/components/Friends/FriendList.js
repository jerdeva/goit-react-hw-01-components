import { FriendCard } from "./FriendCard";
import { FriendsCatalog } from './Friend.styled'
import { FriendItem } from './Friend.styled'


export const FriendList = ({ friendList }) => {
    return <FriendsCatalog>{friendList.map(friend => {
        return (<FriendItem key ={friend.id}> 
            <FriendCard friendInfo={friend } />
        </FriendItem>)
    })}</FriendsCatalog>;
}
