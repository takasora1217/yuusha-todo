import { useState } from "react";
import TodoList from "../components/TodoList";

const Top = () => {
  const [taskList, setTaskList] = useState(() => {});
  return (
    <div className="flex items-center mt-32 ml-8">
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default Top;
