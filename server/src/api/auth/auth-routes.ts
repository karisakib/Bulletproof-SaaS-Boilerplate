import { Router, Request, Response, NextFunction } from "express";
import { checkSchema } from 'express-validator';

const router: Router = Router();

router.get("/register",
 checkSchema({
  firstName: { isAlpha: true, },
  lastName: { isAlpha: true },
  email: { isEmail: true },
  password: { isStrongPassword: true }
 }),
 async (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", path: req.baseUrl, message: "working" });
 });


// router.post("/register",
//  checkSchema({
//   firstName: { isAlpha: true, },
//   lastName: { isAlpha: true },
//   email: { isEmail: true },
//   password: { isStrongPassword: true }
//  }),
//  async (req: Request, res: Response) => {
//   try {
//    // Grab required data from the request body
//    let { firstName, lastName, email, password } = req.body;
//    firstName = firstName.trim();
//    lastName = lastName.trim();
//    email = email.trim();
//    password = password.trim();
//    // log.info("Validating user input now!")

//    // Validate if all required data is not empty
//    if (!firstName || !lastName || !email || !password) {
//     return res.status(400).json({
//      error: "First name, last name, email, and password fields are required.",
//     });
//    }

//    // Hash password once validation is successful
//    const hashedPassword = await hashData(password);

//    // Create a unique username based on first and last name, e.g. sakibk. If sakibka is taken, then add a number to the end.
//    const username = `${lastName}${firstName.split("")[0]}`;

//    const newUserData = new UserModel({
//     firstName,
//     lastName,
//     email,
//     hashedPassword,
//    });


//    // Save user
//    const createdUserData = await newUserData.save();
//    console.log(createdUserData);
//    res.status(201).json({
//     message: "User registered",
//     data: createdUserData,
//    });

//    // Send Email verification (OTP expires in 60 seconds and will need to request a new one)

//    // SMS verification (Twilio API - OTP expires in 60 seconds and will need to request a new one)
//   } catch (error) {
//    res.status(500).json({ error: error.message });
//   }
//  });

// /**
//  * @summary verifies a new user's account registration via email
//  * @path /api/v1/auth/users/verify
//  * @method post
//  */
// router.post("/verify", async (req, res) => {
//  try {
//   let { email, otp } = req.body;
//   email.trim();
//   otp.trim();

//   // Find user by the email
//   const unverifiedUser = OTPModel.findOne({ email });

//   if (!(email && otp)) {
//    throw Error("Email and OTP required!");
//   } else if (unverifiedUser.otp === otp) {
//    // Verify User Account

//    // Complete user registration

//    // Delete OTP from DB

//    res.status(201).json({
//     message: "User email verified",
//     data: createdUserData,
//    });

//    // Redirect user to his home page
//   }
//   // Send Email verification OTP
//  } catch (error) {
//   res.status(500).json({ error: error.message });
//  }
// });

// /**
//  * @summary logs in a user
//  * @path /api/v1/auth/user/login
//  * @method post
//  */
// router.post("/login", async (req, res) => {
//  try {
//   // Grab user data from request body
//   let { email, password } = req.body;
//   // Trim any excess whitespace
//   email = email.trim();
//   password = password.trim();

//   // Handle error - no username or password
//   if (!email || !password) {
//    throw Error("Email and password are required!");
//   }

//   // console.log(`working up to here`);
//   // Attempt to authenticate user
//   const authenticatedUser = await authenticateUser({ email, password });
//   // Successful response
//   if (!authenticatedUser) {
//    res.status(401).json({
//     message: "User authentication failed.",
//    });
//   }
//   res.status(200).json({
//    message: "User authenticated.",
//    data: authenticatedUser,
//   });
//  } catch (error) {
//   res.status(500).json({ error: error.message });
//  }
// });

// /**
//  * @summary resets a user's password and sends an email verification
//  * @path /api/v1/auth/reset
//  * @method post
//  */
// router.post("/reset", async (req, res) => {
//  // TODO: Needs to be 400 errors for user input errors
//  try {
//   // Sanitize user form details
//   let { email } = req.body;
//   email = email.trim();
//   // If no email provided, throw error
//   if (!email) {
//    throw Error("Email is a required field.");
//   }
//   // If email provided, search is user exists
//   const user = UserModel.find({ filter: { email: email } });
//   if (!user) {
//    throw Error(`User with email ${email} could not be found.`);
//   }
//   // If user found, but is not verified, cannot change password, must verify
//   console.log(user);
//   res.status(201).json({
//    message: "User Found",
//    // data: user,
//   });
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });

// /**
//  * @summary verifies user's password reset request and sends user password reset form
//  * @path /api/v1/auth/verify-reset
//  * @method post
//  */
// router.post("/verify-reset", async (req, res) => {
//  try {
//   res.status(200).json({
//    message: "Password Reset Verification",
//    // data: user,
//   });
//  } catch (error) {
//   res.status(500).json({ error: err.message });
//  }
// });

// /**
//  * @summary logs out a user
//  * @path /api/v1/auth/logout
//  * @method post
//  */
// router.post("/logout", async (req, res) => {
//  try {
//   // Delete sessionID, Cookies, or refreshToken
//   res.status(200).json({ status: "ok", message: "User is logged out" });
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });

// /**
//  * @summary refreshes a users credentials and sends to client-side
//  * @path /api/v1/auth/refresh
//  * @method post
//  */
// router.post("/refresh", async (req, res) => {
//  try {
//   // Update sessionID, Cookies, or refreshToken
//   res.status(200).json({ status: "ok", message: "User token refreshed" });
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });


// router.patch("/deactivate", async (req, res) => {
//  try {
//   const { email } = req.body;
//   //
//   res.status(202).json({
//    status: "ok",
//    message: `User account with ${email} deactivated`,
//   });
//  } catch (err) {
//   // log.error(`Error deactivating user account with email ${email}`);
//   res.status(500).json({ error: err.message });
//  }
// });

// router.patch("/reactivate", async (req, res) => {
//  try {
//   const { email } = req.body;
//   //
//   res.status(202).json({
//    status: "ok",
//    message: `User account with ${email} reactivated`,
//   });
//  } catch (err) {
//   // log.error(`Error reactivating user account with email ${email}`);
//   res.status(500).json({ error: err.message });
//  }
// });

// router.delete("/delete", async (req: Request, res: Response) => {
//  try {
//   const { email } = req.body;
//   // Optionally confirm deletion with the user first
//   // e.g., by sending a confirmation email or showing a confirmation page
//   // Ensure that the user is authenticated and authorized to delete their account.
//   // Consider cleaning up related data, such as posts, comments, sessions, and tokens.
//   // If needed, implement a soft delete mechanism by marking the user as deleted rather than removing them from the database.
//   // Properly handle errors and edge cases, such as attempting to delete a non-existent user.
//   // Or you can mark user as deleted but keep all their data
//   res.status(204).json({
//    status: "ok",
//    message: `User account with ${email} suspended`,
//   });
//  } catch (err) {
//   // log.error(`Error deleting user account with email ${email}`);
//   res.status(500).json({ error: err.message });
//  }
// });

// module.exports = router;



//////////////// API KEY ROUTES //////////////////////

const { v4: uuidv4 } = require("uuid");

// const sendOTP = require("./controller");


/**
 * @path /api/v1/apikey/
 * @method post
 */
router.post("/", async (req, res) => {
 try {
  let { email, subject, message, duration } = req.body;
  res.status(201).json({
   message: "POST /api/v1/apikey/ working"
  });
 } catch (err) {
  res.status(400).json({ error: err.message });
 }
});

/**
 * @path /api/v1/apikey/
 * @method get
 * @param userId
 * @summary returns stats for user given userId
 */
router.get("/", async (req, res) => {
 try {
  res.status(200).json({
   message: "GET /api/v1/apikey/ working"
  });
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});


/**
 * @path /api/v1/apikey/create
 * @method post
 * @param userId
 * @summary returns a newly created api key
 */
router.post("/create", async (req, res) => {
 let { email } = req.body;
 email = email.trim();
 const generatedApiKey = uuidv4();
 console.log(generatedApiKey);
 try {
  const newApiKeyData = new ApiKeyModel({ email, generatedApiKey });
  const savedApiKeyData = await newApiKeyData.save();
  console.log(savedApiKeyData);
  res.status(201).json({
   message: `API KEY: ${generatedApiKey} created for user with email: ${email}`
  });
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});


/**
 * @path /api/v1/apikey/:userId
 * @method get
 * @param userId
 * @summary returns a newly created api key based on userId
 */
// router.get("/:userId", async (req, res) => {
//  let { email } = req.body;
//  email = email.trim();
//  const generatedApiKey = crypto.randomBytes(16).toString("hex");
//  console.log(generatedApiKey);
//  try {
//   const newApiKeyData = new ApiKeyModel({ email, generatedApiKey });
//   const savedApiKeyData = await newApiKeyData.save();
//   console.log(savedApiKeyData);
//   res.status(201).json({
//    message: `API KEY: ${generatedApiKey} created for user with email: ${email}`
//   });
//  } catch (error) {
//   res.status(400).json({ error: error.message });
//  }
// });





module.exports = router;


// // Testing user login
// router.post("/login", async (req: Request, res: Response) => {
//  try {
//   // Get req.body data from client
//   let { email, password } = req.body;
//   email = email.trim();
//   password = password.trim();

//   if (!email && !password) {
//    throw Error("Email and password required.")
//   }

//   const userCredentials = await UserModel.findOne({
//    email: req.body.email,
//   });
//   const isValid = await bcrypt.compare(
//    req.body.password,
//    userCredentials.hashedPassword
//   );
//   if (isValid) {
//    res.status(200).json({
//     message: "User authenticated.",
//    });
//   } else {
//    res.status(401).json({
//     message: "User authentication failed.",
//    });
//   }
//  } catch (err) {
//   res.status(400).json({ error: err.message });
//  }
// });



////////OTP ROUTES//////////




// const sendOTP = require("./controller");

// /**
//  * @path /api/v1/otp/verify
//  * @method post
//  * @param 
//  * @summary verifies otp sent to user's email
//  */
// router.post("/verify", async (req, res) => {
//  try {
//   let { email, otp } = req.body;
//   const validOTP = await verifyOTP({ email, otp });
//   res.status(201).json({ valid: validOTP });
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });

// /**
//  * @path /api/v1/otp/
//  * @method post
//  * @param 
//  * @summary creates and sends otp to user's email for verification
//  */
// router.post("/", async (req, res) => {
//  try {
//   let { email, subject, message, duration } = req.body;

//   // const createdOTP = await sendOTP({
//   //  email,
//   //  subject,
//   //  message,
//   //  duration
//   // })

//   res.status(201).json(createdOTP);
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });

// module.exports = router;
