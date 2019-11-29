const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const logger = require("../../middleware/logger");

router.put(
  "/",
  logger,
  [check("count", "Count should be a number").isNumeric()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      req.session.count = req.body.count + 1;
      res.send("Updated");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
