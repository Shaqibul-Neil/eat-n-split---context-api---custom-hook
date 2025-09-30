import { useState } from "react";

const useInputField = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const reset = () => setInputValue(initialValue);
  return [inputValue, handleInputChange, reset];
};

export default useInputField;
