import { useContext } from "react";
import Button from "./Button";
import useInputField from "./useInputField";
import AllFriendsContext from "./AllFriendsContext";

const FormAddFriend = () => {
  const [name, setName, resetName] = useInputField("", "text");
  const [image, setImage, resetImage] = useInputField(
    "https://i.pravatar.cc/48",
    "text"
  );
  const { handleAddFriend } = useContext(AllFriendsContext);

  const handleAddFriendSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!name || !image) return;
    //creating new id and new friend object
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    handleAddFriend(newFriend);
    //reset inputs
    resetName();
    resetImage();
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddFriendSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type="text" value={name} onChange={setName} />
      <label>🧑🏻‍🏫 Image Url</label>
      <input type="text" value={image} onChange={setImage} />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default FormAddFriend;
