import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

const InputForm = ({ taskList, setTaskList }) => {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") return;

        setTaskList([...taskList, { text: inputText }]);
        setInputText("");
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className='flex flex-col items-center gap-4'>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input type='text' 
                value={inputText} 
                onChange={handleChange}
                placeholder="TODOを入力" 
                className='border border-solid border-2 rounded border-black mt-6 px-4 py-2;'
                />
                <button type="submit" className="text-blue-500 hover:text-blue-800 mt-6">
                    <IoIosAddCircleOutline size={35} />
                </button>
            </form>

            {}
            <ul>
                {taskList.map((task, index) => (
                    <li key={index} className=" p-2 text-center border border-1 rounded-lg border-black hover:bg-gray-200">{task.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default InputForm;