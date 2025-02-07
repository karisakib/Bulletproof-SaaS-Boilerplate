import { Router, Request, Response, NextFunction } from "express";
import log from "@/utils/logger";
import bcrypt from "bcryptjs";
import UserModel from "../users/model"
import OTPModel from "../otp/model";
const { hashData, verifyHashedData } = require("@/utils/hashData");
const { authenticateUser } = require("./controller");
const auth = require("@/middleware/authMiddleware");
import { v4 } from "uuid";
const regexPatterns = require("@/utils/regex");

// const sendOTP = require("./controller");




const router: Router = Router();

/**
 * @path /api/v1/auth/users/register
 * @method get
 * @summary Testing router
 */
router.get("/register", (req, res) => {
 res.status(200).json({ status: "OK", path: req.baseUrl, message: "working" });
});

/**
 * @path /api/v1/auth/users/register
 * @method post
 * @param userId
 * @summary creates user and returns status 'ok' or 'error'
 */
router.post("/register", async (req: Request, res: Response) => {
 try {
  // Grab required data from the request body
  let { firstName, lastName, email, password } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  password = password.trim();
  log.info("Validating user input now!")

  // Validate if all required data is not empty
  if (!firstName || !lastName || !email || !password) {
   return res.status(400).json({
    error: "First name, last name, email, and password fields are required.",
   });
  }

  // Check if name passes regex
  if (
   !regexPatterns.nameRegex.test(firstName) ||
   !regexPatterns.nameRegex.test(lastName)
  ) {
   res.status(400).json({
    error: "Names must only contain letters, hyphens, and apostrophes.",
   });
  }

  // Check if email passes regex
  if (!regexPatterns.emailRegex.test(email)) {
   res.status(400).json({
    error: "Not a valid email.",
   });
  }

  // Check if password passes regex
  if (!regexPatterns.passwordRegex.test(password)) {
   res.status(400).json({
    error:
     "Password must be 8-16 characters, including letters, digits, and special character from @$!%*?&",
   });
  }

  // Hash password once validation is successful
  const hashedPassword = await hashData(password);

  // Create a unique username based on first and last name, e.g. sakibk. If sakibka is taken, then add a number to the end.
  const username = `${lastName}${firstName.split("")[0]}`;

  const newUserData = new UserModel({
   firstName,
   lastName,
   email,
   hashedPassword,
  });


  // Save user
  const createdUserData = await newUserData.save();
  console.log(createdUserData);
  res.status(201).json({
   message: "User registered",
   data: createdUserData,
  });

  // Send Email verification (OTP expires in 60 seconds and will need to request a new one)

  // SMS verification (Twilio API - OTP expires in 60 seconds and will need to request a new one)
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

/**
 * @summary verifies a new user's account registration via email
 * @path /api/v1/auth/users/verify
 * @method post
 */
router.post("/verify", async (req, res) => {
 try {
  let { email, otp } = req.body;
  email.trim();
  otp.trim();

  // Find user by the email
  const unverifiedUser = OTPModel.findOne({ email });

  if (!(email && otp)) {
   throw Error("Email and OTP required!");
  } else if (unverifiedUser.otp === otp) {
   // Verify User Account

   // Complete user registration

   // Delete OTP from DB

   res.status(201).json({
    message: "User email verified",
    data: createdUserData,
   });

   // Redirect user to his home page
  }
  // Send Email verification OTP
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

/**
 * @summary logs in a user
 * @path /api/v1/auth/user/login
 * @method post
 */
router.post("/login", async (req, res) => {
 try {
  // Grab user data from request body
  let { email, password } = req.body;
  // Trim any excess whitespace
  email = email.trim();
  password = password.trim();

  // Handle error - no username or password
  if (!email || !password) {
   throw Error("Email and password are required!");
  }

  // console.log(`working up to here`);
  // Attempt to authenticate user
  const authenticatedUser = await authenticateUser({ email, password });
  // Successful response
  if (!authenticatedUser) {
   res.status(401).json({
    message: "User authentication failed.",
   });
  }
  res.status(200).json({
   message: "User authenticated.",
   data: authenticatedUser,
  });
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

/**
 * @summary resets a user's password and sends an email verification
 * @path /api/v1/auth/reset
 * @method post
 */
router.post("/reset", async (req, res) => {
 // TODO: Needs to be 400 errors for user input errors
 try {
  // Sanitize user form details
  let { email } = req.body;
  email = email.trim();
  // If no email provided, throw error
  if (!email) {
   throw Error("Email is a required field.");
  }
  // If email provided, search is user exists
  const user = UserModel.find({ filter: { email: email } });
  if (!user) {
   throw Error(`User with email ${email} could not be found.`);
  }
  // If user found, but is not verified, cannot change password, must verify
  console.log(user);
  res.status(201).json({
   message: "User Found",
   // data: user,
  });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

/**
 * @summary verifies user's password reset request and sends user password reset form
 * @path /api/v1/auth/verify-reset
 * @method post
 */
router.post("/verify-reset", async (req, res) => {
 try {
  res.status(200).json({
   message: "Password Reset Verification",
   // data: user,
  });
 } catch (error) {
  res.status(500).json({ error: err.message });
 }
});

/**
 * @summary logs out a user
 * @path /api/v1/auth/logout
 * @method post
 */
router.post("/logout", async (req, res) => {
 try {
  // Delete sessionID, Cookies, or refreshToken
  res.status(200).json({ status: "ok", message: "User is logged out" });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

/**
 * @summary refreshes a users credentials and sends to client-side
 * @path /api/v1/auth/refresh
 * @method post
 */
router.post("/refresh", async (req, res) => {
 try {
  // Update sessionID, Cookies, or refreshToken
  res.status(200).json({ status: "ok", message: "User token refreshed" });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});


router.patch("/deactivate", async (req, res) => {
 try {
  const { email } = req.body;
  //
  res.status(202).json({
   status: "ok",
   message: `User account with ${email} deactivated`,
  });
 } catch (err) {
  log.error(`Error deactivating user account with email ${email}`);
  res.status(500).json({ error: err.message });
 }
});

router.patch("/reactivate", async (req, res) => {
 try {
  const { email } = req.body;
  //
  res.status(202).json({
   status: "ok",
   message: `User account with ${email} reactivated`,
  });
 } catch (err) {
  log.error(`Error reactivating user account with email ${email}`);
  res.status(500).json({ error: err.message });
 }
});

router.delete("/delete", async (req: Request, res: Response) => {
 try {
  const { email } = req.body;
  // Optionally confirm deletion with the user first
  // e.g., by sending a confirmation email or showing a confirmation page
  // Ensure that the user is authenticated and authorized to delete their account.
  // Consider cleaning up related data, such as posts, comments, sessions, and tokens.
  // If needed, implement a soft delete mechanism by marking the user as deleted rather than removing them from the database.
  // Properly handle errors and edge cases, such as attempting to delete a non-existent user.
  // Or you can mark user as deleted but keep all their data
  res.status(204).json({
   status: "ok",
   message: `User account with ${email} suspended`,
  });
 } catch (err) {
  log.error(`Error deleting user account with email ${email}`);
  res.status(500).json({ error: err.message });
 }
});

module.exports = router;
