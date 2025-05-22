import { useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const Top = () => {
  const [taskList, setTaskList] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  return (
    <>
      <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />
      <div className="flex flex-col space-y-2 m-16">
        <TodoList
          taskList={taskList}
          setTaskList={setTaskList}
          completedCount={completedCount}
          setCompletedCount={setCompletedCount}
        />
      </div>
    </>
  );
};

export default Top;
