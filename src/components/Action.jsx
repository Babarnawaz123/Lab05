// Action.js
import { useState } from "react";

function Action() {
  const [showHobbies, setShowHobbies] = useState(false);

  return (
    <div>
      <button onClick={() => setShowHobbies(!showHobbies)}>
        {showHobbies ? "Hide Hobbies" : "Show Hobbies"}
      </button>

      {showHobbies && (
        <ul>
          <li>Reading</li>
          <li>Coding</li>
          <li>Gym</li>
        </ul>
      )}
    </div>
  );
}

export default Action;
