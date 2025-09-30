import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with </h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍‍♀️Your expense</label>
      <input type="text" />
      <label>🧍‍♀️'s Expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
