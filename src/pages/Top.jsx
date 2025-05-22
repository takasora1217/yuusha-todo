import { useState } from "react";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";

const Top = ({}) => {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="flex flex-col items-center ">
        <img src={boss} alt="boss" className="w-64" />
        <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />
        <img src={yuusha} alt="yuusha" className="w-56" />
      </div>
    </>
  );
};

export default Top;
