const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let exchangeSchema = new Schema({
  id: {
      type: mongoose.Types.ObjectId,
  },
  fromCcy: {
    type: String,
  },
  toCcy: {
    type: String,
  },
  value: {
    type: Number,
  }
});

let Exchange = mongoose.model("exchange", exchangeSchema);

module.exports = Exchange;