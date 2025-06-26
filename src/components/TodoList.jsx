import { LuSwords } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export const TodoList = ({
  taskList,
  setTaskList,
  completedCount,
  setCompletedCount,
  setTasksCompletedCount,
}) => {
  const [animatingtask, setAnimatingTask] = useState(null);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatElapsedTime = (timestamp) => {
    const seconds = Math.floor((currentTime - timestamp) / 1000);

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
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleDone = (id) => {
    setAnimatingTask(id);
    setTimeout(() => {
      setAnimatingTask(null);
      const updatedTasks = taskList.map((task) => {
        if (id === task.id) {
          return { ...task, completed: true };
        }
        return task;
      });

      const completedTask = updatedTasks.find((task) => task.id === id);
      const damage = completedTask.weight * 10;
      const newTaskList = updatedTasks.filter((task) => task.id !== id);
      const newCompletedCount = completedCount + damage;

      const newTasksCompletedCount =
        (JSON.parse(localStorage.getItem("tasksCompletedCount")) || 0) + 1;

      const completedTasksFromStorage =
        JSON.parse(localStorage.getItem("completedTasks")) || [];

      completedTasksFromStorage.push({
        ...completedTask,
        createdAt: completedTask.createdAt
      });
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(completedTasksFromStorage)
      );
      localStorage.setItem("completedCount", newCompletedCount.toString());
      localStorage.setItem("tasksCompletedCount", newTasksCompletedCount.toString());
      setTaskList(newTaskList);
      setCompletedCount(newCompletedCount);
      setTasksCompletedCount(newTasksCompletedCount);
      console.log("completedCount", completedCount);
    }, 1000);
  };

  return (
    <>
      {taskList.map((task) => (
        <div
          key={task.id}
          className={`flex items-center space-x-2 transition-all duration-500 ${
            animatingtask === task.id ? "transform translate-x-full" : ""
          }`}
        >
          <div className="border-solid border-2 border-black w-80 h-auto items-center justify-between px-4 bg-gray-100 rounded-md shadow-md text-lg mt-4 py-2">
            <span>{task.title} (重さ: {task.weight})</span>
            {task.createdAt && (
              <p className="text-sm text-gray-500 mt-1">
                追加: {formatElapsedTime(task.createdAt)}
              </p>
            )}
          </div>
          <div className="flex space-x-1">
            <button onClick={() => handleDone(task.id)} className="mt-4">
              <LuSwords size={28} />
            </button>
            <button onClick={() => handleDelete(task.id)} className="mt-4">
              <FaTrashAlt size={28} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;