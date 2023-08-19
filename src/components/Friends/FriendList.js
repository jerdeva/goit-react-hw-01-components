import { FriendCard } from "./FriendCard";

export const FriendList = ({ friendList }) => {
    return <ul>{friendList.map(friend => {
        return (<li key ={friend.id}> 
            <FriendCard friendInfo={friend } />
        </li>)
    })}</ul>;
}
