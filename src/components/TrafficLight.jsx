// TrafficLight.js
import { useState } from "react";
import Status from "./Status";

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* Light Circle */}
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          borderRadius: "50%",
          backgroundColor: color,
          boxShadow: "0 0 20px " + color,
        }}
      ></div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("green")}>Green</button>
      </div>

      {/* Status component */}
      <Status currentColor={color} />
    </div>
  );
}

export default TrafficLight;
