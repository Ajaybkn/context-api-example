import React, { useContext } from "react";
import { globalInfo } from "./App";
const SuperChild = () => {
  const { appColor, getDay } = useContext(globalInfo);
  const day = "Huhahuha";
  console.log(appColor, "appppp");

  return (
    <div>
      <h2 style={{ color: appColor }}>super child component</h2>
      <button onClick={() => getDay(day)}>Change Color</button>
    </div>
  );
};

export default SuperChild;
