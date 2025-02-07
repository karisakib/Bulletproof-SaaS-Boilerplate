const OTPModel = require("./model");
const { hashData, verifyHashedData } = require("../../../../utils/hashData");
const sendEmail = require("../../../../utils/sendEmail");
const generateOTP = require("../../../../utils/generateOTP");

const { EMAIL_AUTH_EMAIL } = process.env;

const verifyOTP = async ({ email, otp }) => {
 try {
  // Check if data is provided
  if (!email || !otp) {
   throw Error(`Provide value for email and  message.`);
  }
  // Check if otp exists
  const matchedOTPRecord = await OTPModel.findOne({ email: email });
  if (!matchedOTPRecord) {
   throw Error(`No top records found`);
  }

  const { expiresAt } = matchedOTPRecord;

  // expired top
  if (expiresAt < Date.now()) {
   await OTPModel.deleteOne({ email });
   throw Error(`Code has expired. Request a new code.`);
  }

  // not yet expired, verify otp
  const hashedOTP = matchedOTPRecord.otp;
  const validOTP = await verifyHashedData(otp, hashedOTP);
  return validOTP;
 } catch (error) {
  throw error;
 }
};

const sendOTP = async ({ email, subject, message, duration = 5 }) => {
 try {
  if (!email || !subject || !message) {
   throw Error(`Provide value for email, subject, and message.`);
  }

  // Clear any old record
  await OTPModel.deleteOne({ email });

  // Generate OTP
  const generatedOTP = await generateOTP();

  // Send email
  const mailOptions = {
   from: EMAIL_AUTH_EMAIL,
   to: email,
   subject: subject,
   html: `
        <p>${message}</p><br><br>
        <p style="color:red;font-size:36px;letter-spacing: 2px;">${generatedOTP}</p>
        <br><br><p>This code will expire in ${duration} minutes.</p>
      `,
  };

  // Send email
  const emailResponse = await sendEmail(mailOptions);
  console.log("Email response:", emailResponse);

  // Save the OTP in database
  const hashedOTP = await hashData(generatedOTP);
  const newOTP = new OTPModel({
   email: email,
   otp: hashedOTP,
  });

  const createdOTPRecord = await newOTP.save();
  return createdOTPRecord;
 } catch (error) {
  throw Error(`Error sending OTP. Check sendOTP function in otp.js file.`);
 }
};

const deleteOTP = async (email) => {
 try {
  await OTPModel.deleteOne({ email });
 } catch (error) {
  throw error;
 }
};

module.exports = { sendOTP, verifyOTP, deleteOTP };
