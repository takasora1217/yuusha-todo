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
      const baseDamage = completedTask.weight * 10; // 元々のダメ計算

      // 経過時間に基づいてダメージを減らす
      const elapsedMilliseconds = currentTime - completedTask.createdAt;
      const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);
      const damageReduction = Math.floor(elapsedHours / 2); // 2時間ごとにダメージを1減らす

      const finalDamage = Math.max(1, baseDamage - damageReduction); // ダメージが1未満にならないようにする

      const newTaskList = updatedTasks.filter((task) => task.id !== id);
      const newCompletedCount = completedCount + finalDamage; // 最終的なダメージを使用

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
      {taskList.map((task) => {
        const elapsedMilliseconds = currentTime - task.createdAt;
        const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);
        const damageReduction = Math.floor(elapsedHours / 2);
        const currentEffectiveDamage = Math.max(1, (task.weight * 10) - damageReduction);

        const hoursUntilNextReduction = 2 - (elapsedHours % 2);
        const minutesUntilNextReduction = Math.floor(hoursUntilNextReduction * 60);

        return (
          <div
            key={task.id}
            className={`flex items-center space-x-2 transition-all duration-500 ${
              animatingtask === task.id ? "transform translate-x-full" : ""
            }`}
          >
            <div className="border-solid border-2 border-black w-80 h-auto items-center justify-between px-4 bg-gray-100 rounded-md shadow-md text-lg mt-4 py-2">
              <span>{task.title} (重さ: {task.weight}) (攻撃力: {currentEffectiveDamage})</span>
              {task.createdAt && (
                <p className="text-sm text-gray-500 mt-1">
                  追加: {formatElapsedTime(task.createdAt)}
                  {minutesUntilNextReduction > 0 && (
                    <span className="ml-2">
                      (あと{minutesUntilNextReduction}分でダメージ1減少)
                    </span>
                  )}
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
        );
      })}
    </>
  );
};

export default TodoList;