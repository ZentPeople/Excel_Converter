const express = require("express");
const { body } = require("express-validator/check");
const finanaceController = require("../controller/finance");
const router = express.Router();

router.get("", finanaceController.checkConnection);
router.get("analysis", finanaceController.getAnalysis);
router.get("news", finanaceController.getNews);

module.exports = router;
