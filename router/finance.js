const express = require("express");
const { query } = require("express-validator/check");
const finanaceController = require("../controller/finance");
const router = express.Router();

router.get("/", finanaceController.checkConnection);
router.get(
  "/analysis",
  [
    query("symbol")
      .exists()
      .escape()
      .withMessage("Kindly Enter a valid symbol"),
    query("region").optional().escape(),
  ],
  finanaceController.getAnalysis
);
router.get(
  "/news",
  [
    query("symbols")
      .exists()
      .escape()
      .withMessage("Kindly Enter a valid symbol"),
  ],
  finanaceController.getNews
);

module.exports = router;
