import logo from "./logo.svg";
import "./App.css";
import ComA from "./component/ComA";
import { createContext } from "react";

const data = createContext();
const data1 = createContext();
function App() {
  const name = "mayur";
  const gender = "male";
  return (
    <div className="App">
      <h1>Example of context API</h1>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ComA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data1 };
