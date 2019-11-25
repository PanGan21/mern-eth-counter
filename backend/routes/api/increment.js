const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const logger = require("../../middleware/logger");

router.post(
  "/",
  logger,
  [check("count", "Count should be a number").isNumeric()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let count = req.body.count;
      count++;
      res.json({ count: count });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
