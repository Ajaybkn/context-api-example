import React, { useContext } from "react";
import SuperChild from "./SuperChild";
const Child = () => {
  return (
    <div>
      <h2>child component</h2>
      <SuperChild />
      {/* <button>Change Color</button> */}
    </div>
  );
};

export default Child;
