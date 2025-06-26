import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import background from "../images/background.png";

const CompletedTasks = () => {
  const [completedTasks, setCompletedtasks] = useState(
    JSON.parse(localStorage.getItem("completedTasks")) || []
  );

  const formatElapsedTime = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    if (seconds < 60) {
      return `${seconds}秒前`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes}分前`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours}時間前`;
    }

    const days = Math.floor(hours / 24);
    return `${days}日前`;
  };

  const handleDelete = (id) => {
    const updatedTasks = completedTasks.filter((task) => task.id !== id);
    setCompletedtasks(updatedTasks);
    localStorage.setItem("completedTasks", JSON.stringify(updatedTasks));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
      className="bg-fixed flex-col items-center justify-center space-y-6"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl m-6 font-bold">完了したタスク</div>
        <div className="max-w-2xl mx-auto">
          {completedTasks.length > 0 ? (
            <ul className="space-y-4">
              {completedTasks.map((task) => (
                <div className="flex space-x-2" key={task.id}>
                  <li
                    className="border-solid border-2 border-black w-80 h-auto items-center justify-between px-4 bg-gray-100 rounded-md shadow-md text-lg mt-2 py-2"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-xl text-gray-700">{task.title}</span>
                      {task.createdAt && (
                        <p className="text-sm text-gray-500 mt-1">
                          完了: {formatElapsedTime(task.createdAt)}
                        </p>
                      )}
                    </div>
                  </li>
                  <button onClick={() => handleDelete(task.id)}>
                    <FaTrashAlt size={26} className="mt-2" />
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
        >
          戦闘に戻る
        </button>
      </div>
    </div>
  );
};

export default CompletedTasks;