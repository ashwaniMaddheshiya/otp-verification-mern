const express = require("express");
const router = express.Router();
const { generateOTP, verfiyOTP } = require("../controllers/otp-ctrl");

router.get("/generate-otp", generateOTP);
router.post("/verify-otp", verfiyOTP);

module.exports = router;
