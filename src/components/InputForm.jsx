import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

const InputForm = ({ taskList, setTaskList }) => {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") return;

        setTaskList([...taskList, {title:inputText,id: uuidv4(),completed: false}])
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
        </div>
    );
};

export default InputForm;