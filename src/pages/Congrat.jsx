import React from "react";
import { Link } from "react-router-dom";

function Congrat() {
  return (
    <div>
      <h1>討伐おめでとう！次のボスを倒しに行こう！！</h1>
      <p>
        <Link to="/">← Topページへ戻る</Link>
      </p>
    </div>
  );
}

export default Congrat;
