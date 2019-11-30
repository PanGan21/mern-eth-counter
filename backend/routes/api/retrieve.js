const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (!req.session.count) {
      req.session.count = 0;
    }
    res.send({ count: req.session.count });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
