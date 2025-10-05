// Result.js
function Result({ isCorrect }) {
  return (
    <h3>
      {isCorrect === null
        ? "Select an answer above 👆"
        : isCorrect
        ? "✅ Correct!"
        : "❌ Wrong!"}
    </h3>
  );
}

export default Result;
