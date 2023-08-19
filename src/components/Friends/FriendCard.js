export const FriendCard = ({ friendInfo }) => {
  return (
    <div>
      <span class="status">{friendInfo.isOnline}</span>
      <img
        class="avatar"
        src={friendInfo.avatar}
        alt="User avatar"
        width="48"
      />
      <p class="name">{friendInfo.name}</p>
    </div>
  );
};
