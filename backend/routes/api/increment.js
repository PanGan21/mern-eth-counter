const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const logger = require("../../middleware/logger");
const Count = require("../../models/Count");

router.put(
  "/",
  logger,
  [check("count", "Count should be a number").isNumeric()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let counter = req.body.count;
    counter++;
    try {
      let newCount = await Count.findOne();
      newCount.count = counter;
      newCount.save();
      res.send(newCount);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    let count = await Count.findOne();
    if (count == null) {
      let newCount = new Count({ count: 0 });
      count = await newCount.save();
      res.send(count);
    } else {
      count = await Count.findOne();
      res.send(count);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
