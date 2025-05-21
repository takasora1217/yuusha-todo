import React from "react";
import bossImg from "../../img/character_akuma 1.png";

const Top = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100vh",
          paddingTop: "40px",
        }}
      >
        <img src={bossImg} alt="ボス" width={200} height={200} flex />
      </div>
    </>
  );
};

export default Top;
