import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import boss from "../images/boss.png";
import boss2 from "../images/boss2.png";
import boss3 from "../images/boss3.png";
import boss5 from "../images/boss5.png";
import boss6 from "../images/boss6.png";
import boss7 from "../images/boss7.png";
import boss8 from "../images/boss8.png";
import boss11 from "../images/boss11.png";
import boss13 from "../images/boss13.png";
import yuusha from "../images/yuusha.png";
import TodoList from "../components/TodoList";
import ProgressBar from "../components/ProgressBar";
import background from "../images/background.png";

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

  const progress = Math.max(0, 100 - (completedCount % 5) * 20);

  // progressが0になったらcongratへ遷移

  useEffect(() => {
    // Congratから戻った場合は遷移しない
    if (
      completedCount > 0 &&
      completedCount % 5 === 0 &&
      lastCongratCounts !== completedCount
    ) {
      setLastCongratCounts(completedCount);
      navigate("/congrat");
    }
  }, [completedCount, navigate, lastCongratCounts]);
 const bossImages = [boss, boss2, boss3, boss5, boss6 , boss7, boss8, boss11 , boss13];
  const [bossImage,] = useState(
    bossImages[Math.floor(Math.random() * bossImages.length)]
  );
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width:"100%",
        }}
        className=" bg-fixed flex-col items-center justify-center space-y-6"
      >
        <div className="flex-col items-center justify-center min-h-screen space-y-6">
          <div className="w-full">
            <div className="font-bold ml-[15%] pt-2 text-2xl">HP</div>
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
            <div className="absolute flex flex-col items-center mt-10">
              <img
                src={bossImage}
                alt="boss"
                className={`w-72 transition-all duration-500 -mt-36 ${
                  animatingBoss ? "animate-pulse p-4 rounded-md" : ""
                }`}
              />
              <InputForm taskList={taskList} setTaskList={setTaskList} />
              <img src={yuusha} alt="yuusha" className="w-56" />
            </div>
            {/* ここまでが写真と入力フォーム */}
            {/* ここからボタンなど */}
            <div className="ml-auto flex flex-col gap-10">
              <Link to="/CompletedTasks">
                <button className="bg-blue-600 text-white py-6 px-14 rounded-md text-2xl font-semibold transition-transform duration-200 transform hover:bg-blue-700 hover:shadow-lg">
                  戦歴を振り返る
                </button>
              </Link>
              <h5 className="font-bold text-6xl italic">
                討伐数：{Math.floor(completedCount / 5)}
              </h5>
            </div>
            {/* ここまでがボタンなど */}
          </div>
          {/* ここまでが3列 */}
        </div>
      </div>
    </>
  );
};

export default Top;