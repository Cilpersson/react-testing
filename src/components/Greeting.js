import React from "react";
import "./style.css";

const Greeting = ({ schoolName }) => {
  if (schoolName) {
    return (
      <div className="counter-container">
        <h1 data-testid="greeting-text-props" className="greeting">
          Hello {schoolName} students!
        </h1>
        <span className="emoji">👋</span>
      </div>
    );
  } else {
    return (
      <div className="counter-container">
        <p data-testid="greeting-text-no-props" className="greeting">
          Hey, you should take a web dev course!
        </p>
      </div>
    );
  }
};

export default Greeting;
