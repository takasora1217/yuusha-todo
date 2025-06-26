const ProgressBar = ({ completedCount }) => {
  // Progress calculation now reflects total damage, resetting every 100 damage
  const progress = Math.max(0, 100 - (completedCount % 100));
  // 5個ごとにバーが0%になる

   // 濃緑(21,128,61)→赤(239,68,68)のグラデーション
  // progress=100で濃緑, progress=0で赤
  let r, g, b;
  const mid = { r: 253, g: 224, b: 71 }; // 黄色
  if (progress >= 50) {
    const start = { r: 21, g: 128, b: 61 }; // 濃緑
    const ratio = 1 - progress / 100; // 0~1の範囲に変換
    r = Math.round(start.r + (mid.r - start.r) * ratio);
    g = Math.round(start.g + (mid.g - start.g) * ratio);
    b = Math.round(start.b + (mid.b - start.b) * ratio);
  } else {
    const end = { r: 180, g: 30, b: 30 }; // 赤
    const ratio = (50 - progress) / 50; // 50%:0, 0%:1
    r = Math.round(mid.r + (end.r - mid.r) * ratio);
    g = Math.round(mid.g + (end.g - mid.g) * ratio);
    b = Math.round(mid.b + (end.b - mid.b) * ratio);
  }
  const barColor = `rgb(${r},${g},${b})`;

  return (
    <>
      <div className=" w-[70%] h-4 bg-red-100 rounded-[5px] overflow-hidden shadow-md">
        <div
          className="h-full rounded-[5px] transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: barColor }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;