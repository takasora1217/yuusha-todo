import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";
import TodoList from "../components/TodoList";
import ProgressBar from "../components/ProgressBar";

const Top = () => {
  const [animatingBoss, setanimatingBoss] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [completedCount, setCompletedCount] = useState(
    () => JSON.parse(localStorage.getItem("completedCount")) || 0
  );
  
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  
   useEffect(() => {
    if (completedCount > 0) {
      setanimatingBoss(true);
      setTimeout(() => {
        setanimatingBoss(false);
      }, 1000);
    }
  }, [completedCount]);
  
  const progress = Math.max(0, 100 - (completedCount % 10) * 10);
  // 10個ごとにバーが0%になる
  
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="font-bold ml-[15%] mt-8">HP</div>
            <div className="flex justify-center items-center">
              <ProgressBar completedCount={completedCount} />
            </div>
        <div className="font-bold ml-[75%]">{progress}/100</div>
        <div className="absolute top-0 right-32 m-4">
          <Link to="/CompletedTasks">
            <button className="bg-[#D3FFC7] py-2 px-6 rounded-lg border-[1px] border-black hover:bg-[#A4E791]">
              完了したタスクを見る
            </button>
          </Link>
        </div>
        <img src={boss}
            alt="boss"
            className={`w-64 transition-all duration-500 ${
              animatingBoss ? "nimate-pulse p-4 rounded-md " : ""
            }`}/>
        <InputForm taskList={taskList} setTaskList={setTaskList} />
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
    </>
  );
};

export default Top;
