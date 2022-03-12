const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3000;
const config = require("../config");

const cryptosRouter = require("./routes/cryptos");

const dbUrl = config.dbUrl;

var options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/cryptos", cryptosRouter);

app.listen(port, function () {
  console.log("Runnning on " + port);
});
module.exports = app;