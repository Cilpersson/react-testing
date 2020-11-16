import React from "react";
import "./style.css";

const Greeting = ({ schoolName }) => {
  return (
    <div className="container">
      <h1 data-testid="greeting-text-props" className="greeting">
        {schoolName && `Hello ${schoolName} students!`}
        {!schoolName && "Hey, you should take a web dev course!"}
      </h1>
      <span className="emoji">👋</span>
    </div>
  );
};

export default Greeting;
