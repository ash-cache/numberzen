import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Answers from "./components/Answers";

function App() {
  const [history, setHistory] = useState({
    queries: ["dave", "lisa"],
    answers: [],
  });

  const handleInput = (index, value) => {
    const newQueries = [...history.queries];
    newQueries[index] = value;

    const newAnswers = [...history.answers];
    newAnswers[index] = `Hello, ${value}`;

    setHistory({
      queries: newQueries,
      answers: newAnswers
    });
  };

  return (
    <>
      <div id="window">
        <Inputs history={history} handleInput={handleInput} />
        <Answers history={history} />
      </div>
    </>
  );
}

export default App;
