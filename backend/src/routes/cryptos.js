const express = require("express");
const Crypto = require("../models/Crypto");
const Exchange = require("../models/Exchange");
const router = express.Router();

router.get("/top10", async (req, res) => {
  try {
    let cryptos = await Crypto.find()
      .where("rank").lt(11)
      .sort("rank")
      .select("-_id");
    let exchange = await Exchange.find({ fromCcy: "USD", toCcy: "EUR" }).select(
      "value"
    );
    let exchangeValue = exchange[0].value;
    var cryptosMap = JSON.parse(JSON.stringify(cryptos));
    cryptosMap.forEach((c) => {
      c["lastEUR"] = (c["lastUSD"] * exchangeValue).toFixed(2);
      c["marketCap"] = c["marketCap"].toFixed(2);
      c["lastUSD"] = c["lastUSD"].toFixed(2);
    } );
    res.status(200).json({
      status: 200,
      data: cryptosMap,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
