import React, { useState } from "react";
import Counter from "../../components/Counter/Counter";

const Landing = () => {
  const [count, setCount] = useState(0);
  return <Counter count={count} setCount={setCount} />;
};

export default Landing;
