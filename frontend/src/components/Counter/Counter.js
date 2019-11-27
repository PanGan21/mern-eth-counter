import React from "react";
import "./Counter.css";

const Counter = ({ count, onClickHandler }) => {
  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button onClick={onClickHandler}>Click me</button>
    </div>
  );
};
export default Counter;
