import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";

const Top = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="absolute top-0 right-0 m-4">
          <Link to="/CompletedTasks">
            <button className="bg-[#D3FFC7] py-2 px-6 rounded-lg border-[1px] border-black hover:bg-[#A4E791]">
              完了したタスクを見る
            </button>
          </Link>
        </div>
        <img src={boss} alt="boss" className="w-64 mb-8" />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <img src={yuusha} alt="yuusha" className="w-56 mt-8" />
      </div>
    </>
  );
};

export default Top;
