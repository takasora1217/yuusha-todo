import { useState } from "react";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";

const Top = ({}) => {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="flex justify-center">
        <img src={boss} alt="boss" className="w-64" />
      </div>
      <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};

export default Top;
