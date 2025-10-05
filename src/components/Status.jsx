// Status.js
function Status({ currentColor }) {
  let message = "";

  if (currentColor === "red") message = "🛑 Stop";
  else if (currentColor === "yellow") message = "⚠️ Ready";
  else if (currentColor === "green") message = "✅ Go";

  return <h2 style={{ marginTop: "20px" }}>{message}</h2>;
}

export default Status;
