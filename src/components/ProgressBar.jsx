const ProgressBar = ({ completedCount }) => {
  const progress = Math.max(0, 100 - (completedCount % 5) * 20);
  // 5個ごとにバーが0%になる
  return (
    <>
      <div className=" w-[70%] h-4 bg-red-500 rounded-[5px] overflow-hidden">
        <div
          className="w-full h-full bg-green-500 rounded-[5px] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
