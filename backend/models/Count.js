const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountSchema = new Schema({
  count: {
    type: Number,
    required: true
  }
});

module.exports = Count = mongoose.model("count", CountSchema);
