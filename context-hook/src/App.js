import logo from "./logo.svg";
import "./App.css";
import ComA from "./components/ComA";
import { createContext } from "react";

const data = createContext();
const data1 = createContext();
function App() {
  const name = "mayur";
  const age = 21;
  return (
    <div className="App">
      <h1>Example of use-context hook</h1>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ComA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data1 };
