const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const indexRouter = require("./main-api");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.API_PORT || 3019;
app.use("/", indexRouter);
// ROUTES

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
