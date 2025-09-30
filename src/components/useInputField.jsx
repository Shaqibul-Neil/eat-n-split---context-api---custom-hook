import { useState } from "react";

const useInputField = (initialValue, type = "text") => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (input) => {
    let value;
    if (input && input.target) {
      value = input.target.value;
    } else {
      value = input;
    }
    if (type === "number") {
      value = value === "" ? "" : +value;
    }
    setInputValue(value);
  };
  const reset = () => setInputValue(initialValue);
  return [inputValue, handleInputChange, reset];
};

export default useInputField;
/*
Step ১: input && input.target
input check করছে যে parameter truthy কি না।
Truthy মানে null/undefined/false/0 নয়।
অর্থাৎ কোন value এসেছে কি না।
input.target check করছে যে input object React event কিনা।
React input event always থাকে { target: HTMLInputElement }

Step ২: যদি true হয় → value = input.target.value;
মানে parameter truthy + React event → আমরা event থেকে value নিচ্ছি।
উদাহরণ: ইউজার input এ টাইপ করলে event fire হবে, hook এখান থেকে value পাবে।

Step ৩: যদি false হয় → value = input;
মানে বা scenario:
তুমি সরাসরি value পাঠিয়েছো, event object নেই।
তখন hook–কে বলছি, সরাসরি value ব্যবহার কর।
উদাহরণ: setMyExpense(50) আমি যে “direct value” বলছিলাম, সেটা মূলত তখনই ঘটে যখন তুমি setter function–এ সরাসরি একটা value পাঠাও, মানে React input event নয়।

Step ৪: মূল উদ্দেশ্য
একই hook দিয়ে event-driven input ও direct value handle করা।
value যে update হবে সেটা হবে:
Event থেকে পাওয়া user input
অথবা direct value যা তুমি code থেকে পাঠিয়েছো

*/
