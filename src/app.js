const express = require("express");
const compression = require('compression')
const helmet = require('helmet')
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

require('./dbs/init.mongodb')

app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Welcome boysssss" });
});

module.exports = app;
