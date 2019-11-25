import React from "react";
import "./Counter.css";

const Counter = ({ count, increment }) => {
  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};
export default Counter;
