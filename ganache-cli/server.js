const express = require("express");
const app = express();
const data = require("./build/contracts/Count");

app.use(express.json({ extended: false }));

app.get("/getContract", (req, res) => {
  try {
    res.json({ abi: data.abi, address: data.networks["5777"].address });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(4000, () => console.log("Contract server started"));
