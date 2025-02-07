const express = require("express");
const { verifyOTP } = require("./controller");
const router = express.Router();
// const sendOTP = require("./controller");

/**
 * @path /api/v1/otp/verify
 * @method post
 * @param 
 * @summary verifies otp
 */
router.post("/verify", async (req, res) => {
 try {
  let { email, otp } = req.body;
  const validOTP = await verifyOTP({ email, otp });
  res.status(201).json({ valid: validOTP });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

/**
 * @path /api/v1/otp/
 * @method post
 * @param 
 * @summary creates and sends otp to user's email for verification
 */
router.post("/", async (req, res) => {
 try {
  let { email, subject, message, duration } = req.body;

  // const createdOTP = await sendOTP({
  //  email,
  //  subject,
  //  message,
  //  duration
  // })

  res.status(201).json(createdOTP);
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

module.exports = router;
