import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const resetValue = () => {
    setValue(0);
  };

  const setCSSClass = () => {
    return value % 2 === 0 ? "counter-button-green" : "counter-button-blue";
  };

  return (
    <div className="counter-container">
      <p className="counter-text" data-testid="counter-value">
        Counter value: {value}
      </p>
      <div className="wrapper">
        <button
          className={`counter-button ${setCSSClass()}`}
          data-testid="button"
          onClick={() => increaseValue()}
        >
          Click me!
        </button>
        <button
          className="counter-button reset-button"
          data-testid="reset-button"
          onClick={() => resetValue()}
        >
          Reset counter
        </button>
      </div>
    </div>
  );
};
export default Counter;
