import React from "react";
import { LuSwords } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";

export const TodoList = () => {
  return (
    <>
      <div className="flex space-x-1">
        <div className="border-solid border-2 border-black w-64 h-6">
          TodoList
        </div>
        <LuSwords className="w-6 h-6" />
        <FaTrashAlt className="w-5 h-5" />
      </div>
    </>
  );
};

export default TodoList;
