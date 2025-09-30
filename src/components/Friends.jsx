import { useContext } from "react";
import AllFriendsContext from "./AllFriendsContext";
import Friend from "./Friend";

const Friends = () => {
  const { allFriends } = useContext(AllFriendsContext);

  return (
    <ul>
      {allFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default Friends;
