import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import yuusha from "../images/yuusha-1.png";
import TodoList from "../components/TodoList";
import ProgressBar from "../components/ProgressBar";

const Top = () => {
  const [animatingBoss, setanimatingBoss] = useState(false);
  const [taskList, setTaskList] = useState(
    () => JSON.parse(localStorage.getItem("taskList")) || []
    //ローカルストレージからタスクリストを取得して、taskListに代入する/もしローカルストレージが空の場合は空の配列を代入する
    //JSON.parse()は文字列をオブジェクトに変換する（データを保存したり読み込んだりする時に重要
  );
  const [completedCount, setCompletedCount] = useState(
    () => JSON.parse(localStorage.getItem("completedCount")) || 0
  );
  const navigate = useNavigate();
  const [lastCongratCounts, setLastCongratCounts] = useState(
    () => JSON.parse(localStorage.getItem("lastCongratCounts")) || 0
  );
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  useEffect(() => {
    localStorage.setItem(
      "lastCongratCounts",
      JSON.stringify(lastCongratCounts)
    );
  }, [lastCongratCounts]);

  useEffect(() => {
    if (completedCount > 0) {
      setanimatingBoss(true);
      setTimeout(() => {
        setanimatingBoss(false);
      }, 1000);
    }
  }, [completedCount]);

  const progress = Math.max(0, 100 - (completedCount % 10) * 10);

  // progressが0になったらcongratへ遷移

  useEffect(() => {
    // Congratから戻った場合は遷移しない
    if (
      completedCount > 0 &&
      completedCount % 10 === 0 &&
      lastCongratCounts !== completedCount
    ) {
      setLastCongratCounts(completedCount);
      navigate("/congrat");
    }
  }, [completedCount, navigate]);

  return (
    <>
      <div className="flex-col items-center justify-center min-h-screen space-y-6">
        <div className="w-full">
          <div className="font-bold ml-[15%] mt-2 text-2xl">HP</div>
          <div className="flex justify-center items-center">
            <ProgressBar completedCount={completedCount} />
          </div>
          <div className="font-bold text-2xl ml-[75%]">{progress}/100</div>
        </div>
        {/* ここから三列 */}
        <div className="flex flex-wrap w-full justify-around px-10 ">
          {/* ここからTODO */}
        <div className="mr-auto">
          <TodoList
            taskList={taskList}
            setTaskList={setTaskList}
            completedCount={completedCount}
            setCompletedCount={setCompletedCount}
          />
        </div>
        {/* ここまでがTODO */}
        {/* ここから写真と入力フォーム */}
        <div className=" absolute flex flex-col items-center mt-20">
          <img
            src={boss}
            alt="boss"
            className={`w-64 transition-all duration-500 -mt-32 
 ${
              animatingBoss ? "animate-pulse p-4 rounded-md " : ""}`}
          />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <img src={yuusha} alt="yuusha" className="w-56" />
        </div>
        {/* ここまでが写真と入力フォーム */}
        {/* ここからボタンなど */}
        <div className="ml-auto flex flex-col gap-10">
          <Link to="/CompletedTasks">
            <button className="bg-blue-600 text-white py-6 px-14 rounded-md text-2xl font-semibold transition-transform duration-200 transform hover:bg-blue-700 hover:shadow-lg">
              完了したタスクを見る
            </button>
          </Link>
          <h5 className="font-bold text-6xl italic">討伐数：{Math.floor(completedCount /10)}</h5>
        </div>
        {/* ここまでがボタンなど */}
      </div>
      {/* ここまでが3列 */}
      </div>
    </>
  );
};

export default Top;
