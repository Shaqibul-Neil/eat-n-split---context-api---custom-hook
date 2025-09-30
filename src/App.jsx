import { useState } from "react";
import "./App.css";
import AllFriendsContext from "./components/AllFriendsContext";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import Friends from "./components/Friends";

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
  const handleAddFriend = (newFriend) => {
    setAllFriends((prev) => [...prev, newFriend]);
  };
  const handleClickShowAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="app">
      <AllFriendsContext.Provider value={{ allFriends, handleAddFriend }}>
        <div className="sidebar">
          <Friends />
          {showAddForm && <FormAddFriend />}
          <Button onClick={handleClickShowAddForm}>Add Friend</Button>
        </div>
      </AllFriendsContext.Provider>
    </div>
  );
}

export default App;
