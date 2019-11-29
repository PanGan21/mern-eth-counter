import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "../../components/Counter/Counter";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = async () => {
    try {
      await axios.put("/api/increment", { count: count });
      console.log("Increment success");
      getCounter();
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCounter = async () => {
    try {
      const res = await axios.get("/api/retrieve");
      setCount(res.data.count);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCounter();
  });

  return <Counter count={count} onClickHandler={increment} />;
};

export default Home;
