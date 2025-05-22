import { Link } from "react-router-dom";

const Congrat = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-[500px] items-center">
        <h1 className="text-3xl">
          討伐おめでとう！！次のボスを倒しに行こう！！！
        </h1>
        <Link to="/">
          <button className="bg-[#D3FFC7] mt-16 py-4 px-12 rounded-lg border-[1px] border-black hover:bg-[#A4E791]">
            トップへ戻る
          </button>
        </Link>
      </div>
    </>
  );
};

export default Congrat;
