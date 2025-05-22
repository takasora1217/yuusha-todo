const ProgressBar = ({ completedCount }) => {
  const progress = Math.max(0, 100 - (completedCount % 10) * 10);
  // 10個ごとにバーが0%になる
  return (
    <>
      <div className="flex justify-center items-center mt-[30px]">
        <div className=" w-[70%] h-4 bg-red-500 rounded-[5px] overflow-hidden">
          <div
            className="w-full h-full bg-green-500 rounded-[5px] transition-all duration-300" // アニメーションを追加
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="font-bold ml-[75%]">{progress}/100</div>
    </>
  );
};

export default ProgressBar;
