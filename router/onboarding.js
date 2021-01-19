const express = require("express");
const { query } = require("express-validator/check");
const onboardingController = require("../controller/onboarding");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", onboardingController.checkConnection);
router.post(
  "/storeXLDate",
  upload.single("excel"),
  onboardingController.storeExcel
);
module.exports = router;
