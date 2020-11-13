import React, { useState } from "react";
import "./style.css";

const Addition = () => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const sum = (valOne, valTwo) => {
    if (!valOne || !valTwo) return;
    return +valueOne + +valueTwo;
  };

  return (
    <div className="counter-container">
      <div className="wrapper">
        <input
          className="input"
          placeholder="0"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "0")}
          type="number"
          value={valueOne}
          onChange={(event) => setValueOne(event.target.value)}
          data-testid="valone"
        />
        <p className="counter-text">+</p>
        <input
          className="input"
          placeholder="0"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "0")}
          type="number"
          value={valueTwo}
          onChange={(event) => setValueTwo(event.target.value)}
          data-testid="valtwo"
        />
      </div>
      <div>
        <p className="counter-text">{!valueOne || !valueTwo ? "" : "="}</p>
        <p className="counter-text" data-testid="sum">
          {sum(valueOne, valueTwo)}
        </p>
      </div>
    </div>
  );
};
export default Addition;
