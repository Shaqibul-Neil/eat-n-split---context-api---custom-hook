import { useState, useContext } from "react";
import useInputField from "./useInputField";
import Button from "./Button";
import AllFriendsContext from "./AllFriendsContext";

const FormSplitBill = () => {
  const { selectedFriend } = useContext(AllFriendsContext);
  const [bill, setBill, resetBill] = useInputField("", "number");
  const [myExpense, setMyExpense, resetMyExpense] = useInputField("", "number");
  const [whoIsPaying, setWhoIsPaying, resetWhoIsPaying] = useInputField(
    "user",
    "text"
  );

  const friendsExpense = bill - myExpense;

  const handleSplitBillSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!bill || !myExpense || bill < 0) return;
    console.log(bill, myExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input type="number" value={bill} onChange={setBill} />
      <label>🧍‍♀️Your expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => {
          let val = +e.target.value;
          if (val > bill) val = bill;
          setMyExpense(val);
        }}
      />
      <label>🧍‍♀️{selectedFriend.name}'s Expense</label>
      <input type="number" disabled value={friendsExpense} />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button type="submit">Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
