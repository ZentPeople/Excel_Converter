const { validationResult } = require("express-validator/check");
const User = require("../models/user");

// Check if connection exists
exports.checkConnection = (req, res, next) => {
  try {
    res.status(200).json({ message: "Connection Established" });
  } catch (err) {
    next(err);
  }
};
