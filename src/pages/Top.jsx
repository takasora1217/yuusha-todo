import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";
import TodoList from "../components/TodoList";
const Top = () => {
  const [taskList, setTaskList] = useState([]);
  const [completedCount, setCompletedCount] = useState(
    () => JSON.parse(localStorage.getItem("completedCount")) || 0
  );
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  
  return (
    <>
      <div className="flex flex-col items-center ">
        <img src={boss} alt="boss" className="w-64" />
        <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />
        <img src={yuusha} alt="yuusha" className="w-56" />
        <div className="flex flex-col space-y-2 m-16">
          <TodoList
            taskList={taskList}
            setTaskList={setTaskList}
            completedCount={completedCount}
            setCompletedCount={setCompletedCount}
          />
        </div>
      </div>
    </>
  );
};

export default Top;
