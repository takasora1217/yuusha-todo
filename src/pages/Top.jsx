import { useState } from "react";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";

const Top = ({}) => {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="flex justify-center">
        <img src={boss} alt="boss" className="w-64" />
      </div>
      <div className="flex justify-center">
        <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex justify-center h-[280px] items-center pt-1">
        <img src={yuusha} alt="yuusha" className="w-56" />
      </div>
    </>
  );
};

export default Top;
