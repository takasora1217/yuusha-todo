import { useNavigate } from "react-router-dom";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import yuusha from "../images/yuusha.png";
import boss from "../images/boss.png";
import boss5 from "../images/boss5.png";
import boss6 from "../images/boss6.png";
import boss8 from "../images/boss8.png";
import boss11 from "../images/boss11.png";
import background from "../images/background.png";

const Congrat = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const handleBackToTop = () => {
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
        className="bg-fixed flex-col items-center justify-center overflow-hidden"
      >
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
          <h1 className="font-bold text-6xl italic underline text-[#FFB120] shadow-2xl">
            討伐おめでとう！！次のボスを倒しに行こう！！！
          </h1>
          <button
            className="bg-blue-600 text-white py-4 px-10 rounded-md text-2xl font-semibold transition-transform duration-200 transform hover:bg-blue-700 hover:shadow-lg mt-10"
            onClick={handleBackToTop}
          >
            次のボスへ→
          </button>
        </div>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-end gap-8 mb-16 flex-1">
        <img src={boss} alt="ボス" className="w-40" />
          <img src={boss11} alt="ボス11" className="w-40"/>
          <img src={boss8} alt="ボス8" className="w-40"/>
          <img src={boss5} alt="ボス5" className="w-40"/>
          <img src={boss6} alt="ボス6" className="w-40"/>
          <img src={yuusha} alt="勇者" className="w-60"/>
        </div>
      </div>
    </>
  );
};

export default Congrat;
