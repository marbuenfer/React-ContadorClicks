import "./styles.css";

import React, {useState} from "react";
export default function App() {

  const [contar, setContar] = useState(0);
  const contarClics = () =>{
    setContar(contar + 1);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h4>Clicks:{contar}</h4>
      <button onClick={contarClics}>CONTAR CLICKS</button>
    </div>
  );
}
