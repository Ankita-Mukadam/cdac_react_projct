import React, { useState } from "react";
import "./App.css"; // Add some styles later
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString()); // Use eval carefully
      } catch (err) {
        setResult("Error");
      }
    } 
   
    
    else {
      setInput(input + value);
    }
  };

  // New function to increment the current input by 2
  const incrementBy2 = () => {
    setInput((prev) => (parseFloat(prev) + 2).toString());
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {/* Add the new button for incrementing by 2 */}
        <button onClick={incrementBy2}>+2</button>
      </div>
    </div>
  );
};

export default Calculator;