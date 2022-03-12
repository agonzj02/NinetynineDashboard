const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let cryptoSchema = new Schema({
  id: {
      type: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
  },
  marketCap: {
    type: Number,
  },
  lastUSD: {
    type: Number,
  },
  rank: {
    type: Number,
  },
});

let Crypto = mongoose.model("crypto", cryptoSchema);

module.exports = Crypto;
