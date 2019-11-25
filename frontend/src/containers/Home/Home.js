import React, { useState } from "react";
import axios from "axios";
import Counter from "../../components/Counter/Counter";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = async () => {
    try {
      const res = await axios.post("/api/increment", { count: count });
      setCount(res.data.count);
    } catch (err) {
      console.log(err.message);
    }
  };

  return <Counter count={count} increment={increment} />;
};

export default Home;
