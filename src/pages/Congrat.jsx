import { useNavigate } from "react-router-dom";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import yuusha from "../images/yuusha-1.png";
import boss from "../images/boss.png";

const Congrat = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const handleBackToTop = () => {
    navigate("/");
  };
  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1000}
        recycle={false}
        gravity={0.1}
        initialVelocityY={10}
        tweenDuration={2000}
      />
      <div className="flex flex-col justify-center h-[500px] items-center">
        <h1 className="text-3xl">
          討伐おめでとう！！次のボスを倒しに行こう！！！
        </h1>
        <button
          className="bg-[#D3FFC7] mt-16 py-4 px-12 rounded-lg border-[1px] border-black hover:bg-[#A4E791]"
          onClick={handleBackToTop}
        >
          次のボスへ→
        </button>
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-end gap-8 mb-4">
        <img src={yuusha} alt="勇者" className="w-64 h-64" />
        <img src={boss} alt="ボス" className="w-64 h-64" />
      </div>
    </>
  );
};

export default Congrat;
