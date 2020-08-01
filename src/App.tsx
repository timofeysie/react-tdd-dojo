import React from "react";
import "./App.css";

function App() {
  const [displayOutput, setDisplayMessage] = React.useState(false);
  const [input, setOutput] = React.useState("");
  return (
    <div className="App">
      <label htmlFor="name" className="item padding">
        Enter text
      </label>
      <input
        id="name"
        type="text"
        className="padding"
        onChange={(event) => setOutput(event.currentTarget.value)}
      />
      <button onClick={() => setDisplayMessage(true)} className="padding">
        Submit
      </button>
      {displayOutput && <p className="item">{input}</p>}
    </div>
  );
}
export default App;
