// App.js
import Header from "./components/Header";
import Details from "./components/Details";
import Action from "./components/Action";
import { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import TrafficLight from "./components/TrafficLight";

function App() {
  const correctAnswer = "React";
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lab 05</h2>
      <h3>Task 01</h3>
      <Header name="Babar Nawaz" />
      <Details age="23" course="BS Software Engineering" />
      <Action />
      <hr />
      <h3>Task 02</h3>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Question
          question="Which library is used for building user interfaces?"
          options={["React", "Django", "Laravel"]}
          handleAnswer={handleAnswer}
        />
        <Result isCorrect={isCorrect} />
        <hr />
        <h3>Task 03</h3>
        <div>
          <h1 style={{ textAlign: "center" }}>Traffic Light Simulator 🚦</h1>
          <TrafficLight />
        </div>
      </div>
    </div>
  );
}

export default App;
