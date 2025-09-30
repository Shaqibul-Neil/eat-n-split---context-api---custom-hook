import Button from "./Button";

const Friend = ({ friend }) => {
  const conditionalText = () => {
    if (friend.balance < 0)
      return `You owe ${friend.name} ${Math.abs(friend.balance)}$`;
    if (friend.balance > 0) return `${friend.name} owes you ${friend.balance}$`;
    return `You and ${friend.name} are even`;
  };

  const conditionalClass = () => {
    if (friend.balance < 0) return "red";
    if (friend.balance > 0) return "green";
    return "";
  };

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={conditionalClass()}>{conditionalText()}</p>
      <Button>Select</Button>
    </li>
  );
};

export default Friend;
