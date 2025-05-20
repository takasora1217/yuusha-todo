import React from "react";
import { LuSwords } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDone = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleDone(task.id)}>
                <uSwords />
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
