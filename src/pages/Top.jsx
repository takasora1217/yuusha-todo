import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";
import TodoList from "../components/TodoList";

const Top = () => {
  const [animatingBoss, setanimatingBoss] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [completedCount, setCompletedCount] = useState(
    () => JSON.parse(localStorage.getItem("completedCount")) || 0
  );
  useEffect(() => {
    if (completedCount > 0) {
      setanimatingBoss(true);
      setTimeout(() => {
        setanimatingBoss(false);
      }, 1000);
    }
  }, [completedCount]);
  return (
    <>
      <div className="relative">
        <div className="flex flex-col items-center ">
          <img
            src={boss}
            alt="boss"
            className={`w-64 transition-all duration-500 ${
              animatingBoss ? "nimate-pulse p-4 rounded-md " : ""
            }`}
          />
          <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />
          <img src={yuusha} alt="yuusha" className="w-56" />
          <div className="absolute top-24 left-16 space-y-2">
            <TodoList
              taskList={taskList}
              setTaskList={setTaskList}
              completedCount={completedCount}
              setCompletedCount={setCompletedCount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
