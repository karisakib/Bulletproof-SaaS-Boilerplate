const mongoose = require("mongoose");
const OTPSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: false,
    },
    otp: {
      type: String,
    },
    expireAt: {
     type: Date,
     default: Date.now,
     expires: 60*5, // Expires in 5 minutes
   },
  },
  { timestamps: true },
  { collection: "otp" },
  { versionKey: false },
);

const OTPModel = mongoose.model("OTP", OTPSchema, "otp");

module.exports = OTPModel;
