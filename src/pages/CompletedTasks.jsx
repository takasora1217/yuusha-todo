import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const CompletedTasks = () => {
  const [completedTasks, setCompletedtasks] = useState(
    JSON.parse(localStorage.getItem("completedTasks")) || []
  );

  const handleDelete = (id) => {
    const updatedTasks = completedTasks.filter((task) => task.id !== id);
    setCompletedtasks(updatedTasks);
    localStorage.setItem("completedTasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-5xl m-6 font-bold">完了したタスク</div>
      <div className="max-w-2xl mx-auto">
        {completedTasks.length > 0 ? (
          <ul className="space-y-4">
            {completedTasks.map((task) => (
              <div className="flex space-x-2">
                <li
                  key={task.id}
                  className="border-solid border-2 border-black w-80 h-8 items-center justify-between px-4 bg-gray-100 rounded-md shadow-md text-lg mt-2"
                >
                  <div className="flex items-center">
                    <span className="text-gray-700">{task.title}</span>
                  </div>
                </li>
                <button onClick={() => handleDelete(task.id)} >
                  <FaTrashAlt size={26} className="mt-2"/>
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            完了したタスクはありません
          </p>
        )}
      </div>

      <button
         className="fixed top-10 right-10 bg-blue-600 text-white py-5 px-12 rounded-md text-2xl font-semibold transition-transform duration-200 transform hover:bg-blue-700 hover:shadow-lg"
        onClick={() => (window.location.href = "/")}
      >トップページに戻る
      </button>
    </div>
  );
};

export default CompletedTasks;
