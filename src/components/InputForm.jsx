import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");
  const [weight, setWeight] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    setTaskList([
      ...taskList,
      { title: inputText, id: uuidv4(), completed: false, weight: weight },
    ]);
    setInputText("");
    setWeight(1); //重さリセっと
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleWeightChange = (e) => {
    // 重さが1から10の間であることを確認
    const value = Math.max(1, Math.min(10, Number(e.target.value)));
    setWeight(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="TODOを入力"
        className="border border-solid border-2 rounded border-black px-6 py-3"
      />
      <input
        type="number"
        value={weight}
        onChange={handleWeightChange}
        min="1"
        max="10"
        className="border border-solid border-2 rounded border-black px-2 py-3 w-20"
        title="TODOの重さ (1-10)"
      />
      <button type="submit" className="text-blue-700 hover:text-blue-900">
        <IoIosAddCircleOutline size={50} />
      </button>
    </form>
  );
};

export default InputForm;