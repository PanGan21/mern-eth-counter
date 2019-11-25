const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let count = req.body.count;
    count++;
    res.json({ count: count });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
