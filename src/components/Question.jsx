// Question.js
function Question({ question, options, handleAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          style={{ display: "block", margin: "8px auto" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
