const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.session.count) {
    req.session.count = 0;
  }
  res.send({ count: req.session.count });
});

module.exports = router;
