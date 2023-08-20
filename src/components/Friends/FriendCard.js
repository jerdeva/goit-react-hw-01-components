export const FriendCard = ({ friendInfo }) => {
  return (
    <div>
      <span >{friendInfo.isOnline}</span>
      <img
        
        src={friendInfo.avatar}
        alt="User avatar"
        width="48"
      />
      <p >{friendInfo.name}</p>
    </div>
  );
};
