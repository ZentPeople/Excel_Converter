const express = require("express");
const { query } = require("express-validator/check");
const onboardingController = require("../controller/onboarding");
const router = express.Router();

router.get("/", onboardingController.checkConnection);

module.exports = router;
