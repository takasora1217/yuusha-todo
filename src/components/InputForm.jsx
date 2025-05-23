import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    setTaskList([
      ...taskList,
      { title: inputText, id: uuidv4(), completed: false },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
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
      <button type="submit" className="text-blue-500 hover:text-blue-800">
        <IoIosAddCircleOutline size={50} />
      </button>
    </form>
  );
};

export default InputForm;
