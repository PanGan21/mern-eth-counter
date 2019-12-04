import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "../../components/Counter/Counter";
import Web3 from "web3";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:9545")
    );
    const res = await axios.get("/getContract");
    const abi = res.data.abi;
    const contractAddress = res.data.address;
    const contract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.personal.getAccounts();
    const myAccount = accounts[0];
    if ((await web3.eth.getBalance(myAccount)) === 0) {
      console.log("You don't have enough balance");
    } else {
      const res = await contract.methods.increment().send({ from: myAccount });
    }

    getCounter();
  };

  const getCounter = async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:9545")
    );
    const res = await axios.get("/getContract");
    const abi = res.data.abi;
    const contractAddress = res.data.address;
    const contract = new web3.eth.Contract(abi, contractAddress);
    const newCount = await contract.methods.getCount().call();
    setCount(newCount);
  };

  useEffect(() => {
    getCounter();
  });

  return <Counter count={count} onClickHandler={increment} />;
};

export default Home;
