import { useState } from "react";
import "./App.css";
import AllFriendsContext from "./components/AllFriendsContext";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import Friends from "./components/Friends";
import FormSplitBill from "./components/FormSplitBill";
import useInputField from "./components/useInputField";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [allFriends, setAllFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const [bill, setBill, resetBill] = useInputField("", "number");
  const [myExpense, setMyExpense, resetMyExpense] = useInputField("", "number");
  const [whoIsPaying, setWhoIsPaying, resetWhoIsPaying] = useInputField(
    "user",
    "text"
  );

  const handleAddFriend = (newFriend) => {
    setAllFriends((prev) => [...prev, newFriend]);
    setShowAddForm(false);
  };
  const handleClickShowAddForm = () => {
    setShowAddForm(!showAddForm);

    //hiding the split bill form
    setSelectedFriend(null);
  };

  const handleClickSelectedFriend = (newFriend) => {
    setSelectedFriend((currFriend) =>
      currFriend?.id === newFriend.id ? null : newFriend
    );
    //reset the split bill form
    resetBill();
    resetMyExpense();
    resetWhoIsPaying();
    //hiding the add friend form
    setShowAddForm(false);
  };

  return (
    <div className="app">
      <AllFriendsContext.Provider
        value={{
          allFriends,
          handleAddFriend,
          handleClickSelectedFriend,
          selectedFriend,
          bill,
          setBill,
          myExpense,
          setMyExpense,
          whoIsPaying,
          setWhoIsPaying,
        }}
      >
        <div className="sidebar">
          <Friends />
          {showAddForm && <FormAddFriend />}
          <Button onClick={handleClickShowAddForm}>
            {showAddForm ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && <FormSplitBill />}
      </AllFriendsContext.Provider>
    </div>
  );
}

export default App;
