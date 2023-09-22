const otpGenerator = require("otp-generator");

const generateOTP = (req, res, next) => {
  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  res.json({ otp });
};

const verfiyOTP = (req, res, next) => {
  const { userOTP, generatedOTP } = req.body;
  if (userOTP === generatedOTP.otp) {
    res.status(200).json({ message: "OTP is valid" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
};

module.exports = {
  generateOTP,
  verfiyOTP,
};
