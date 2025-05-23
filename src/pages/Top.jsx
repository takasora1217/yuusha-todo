import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Top = () => {
  const [completedCount, setCompletedCount] = useState(0);
  const progress = Math.max(0, 100 - (completedCount % 10) * 10);
  // 10個ごとにバーが0%になる
  return (
    <>
      <div className="font-bold ml-[15%] mt-8">HP</div>
      <div className="flex justify-center items-center">
          <ProgressBar completedCount={completedCount} />
      </div>
      <div className="font-bold ml-[75%]">{progress}/100</div>
    </>
  );
};

export default Top;
