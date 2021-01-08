const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const financeRouter = require("./router/finance");

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

// Default Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS,GET,POST,PUT,PATCH,DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", financeRouter);

// send 404 for wrong endpoint
app.use("/", (req, res, next) => {
  const error = new Error("Sorry the page you are looking for is not found");
  error.statusCode = 404;
  next(error);
});
// Error Handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log(error);
  res.status(status).json({ success: false, message: message, data: data });
});

// Start app
app.listen(process.env.PORT || 8080);

module.exports = app;
