import { useNavigate } from "react-router-dom";

const Congrat = () => {
  const navigate = useNavigate();

  const handleBackToTop = () => {
    sessionStorage.setItem("fromCongrat", "true");
    navigate("/");
  };
  // sessionStorageに値を保存して、Top.jsxで取得する
  // sessionStorageはブラウザを閉じるまでデータが保存される
  return (
    <>
      <div className="flex flex-col justify-center h-[500px] items-center">
        <h1 className="text-3xl">
          討伐おめでとう！！次のボスを倒しに行こう！！！
        </h1>
          <button className="bg-[#D3FFC7] mt-16 py-4 px-12 rounded-lg border-[1px] border-black hover:bg-[#A4E791]" onClick={handleBackToTop}>
            トップへ戻る
          </button>
      </div>
    </>
  );
};

export default Congrat;
