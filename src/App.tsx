import React from "react";
import "./App.css";

function App() {
  const [displayOutput, setDisplayMessage] = React.useState(false);
  const [input, setOutput] = React.useState("");
  const anagrams = (word: string): string => {
    return word
      .split("")
      .map((character: string, index: number) => {
        const head = word.slice(0, index);
        const tail = word.substring(index + 1);
        const result: string[] = [];
        for (let nextCharInTail of head) {
          result.push(character + nextCharInTail);
        }
        for (let nextCharInTail of tail) {
          result.push(character + nextCharInTail);
        }
        return result;
      })
      .join(" ");
  };
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
      {displayOutput && <p className="item">{anagrams(input)}</p>}
    </div>
  );
}
export default App;
