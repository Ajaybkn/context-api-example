import { createContext, useState } from "react";
import Child from "./Child";
export const globalInfo = createContext();
function App() {
  const [color, setColor] = useState("green");
  const getDay = (item) => {
    console.log(item);
  };
  return (
    <globalInfo.Provider value={{ appColor: color, getDay: getDay }}>
      <div>
        <h1>App component</h1>
        <Child />
      </div>
    </globalInfo.Provider>
  );
}

export default App;
