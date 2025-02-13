import { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { authSchemas } from "./auth-schemas";
import { AuthHandlers } from "./auth-handlers";
const router: Router = Router();

// Register
// router.post("/register",
//  checkSchema(authSchemas.register),
//  async (req: Request, res: Response): Promise<void> => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//    res.status(400).json({ status: "ERROR", errors: errors.array() });
//    return;
//   }

//   res.status(201).json({
//    status: "OK",
//    message: "working",
//    data: []
//   });
//  });

router.post("/register",
  checkSchema(authSchemas.register), AuthHandlers.register);


  // async (req: Request, res: Response): Promise<void> => {
  //  const errors = validationResult(req);
 
  //  if (!errors.isEmpty()) {
  //   res.status(400).json({ status: "ERROR", errors: errors.array() });
  //   return;
  //  }
 
  //  res.status(201).json({
  //   status: "OK",
  //   message: "working",
  //   data: []
  //  });
  // });


// Login
router.post("/login",
 checkSchema(authSchemas.login),
 async (req: Request, res: Response): Promise<void> => {

  const testAccount = {
   email: "user@bs.com",
   password: "password"
  }

  const { email, password } = req.body;

  if (email == testAccount.email && password == testAccount.password) {
   res.json({
    status: "OK",
    message: "User logged in",
    data: []
   });
  }

 });

// Logout
router.post("/logout", async (req: Request, res: Response) => {
 res.status(204).json({ status: "OK", message: "User logged out", data: [] });
}
);

// Forgot Password
router.post("/forgot-password",
 checkSchema(authSchemas.forgotPassword),
 async (req: Request, res: Response) => {
  res.json({ status: "OK", message: "Requesting password update", data: [] });
 });

// Reset Password
router.post("/reset-password",
 checkSchema(authSchemas.resetPassword),
 async (req: Request, res: Response) => {
  res.json({ status: "OK", message: "User password is reset", data: [] });
 });

// OTP
router.post("/otp/:userId",
 checkSchema(authSchemas.otp),
 async (req: Request, res: Response) => {
 res.json({ status: "OK", message: "Create and email generated OTP for userId" });
});

router.get("/otp/:userId", 
 checkSchema(authSchemas.otp),
 async (req: Request, res: Response) => {
 res.json({ status: "OK", message: "Get generated OTP for userId" });
});

// API Key
router.post("/api-key/:userId", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "working" });
});

router.get("/api-key/:userId", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "working" });
});

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' with method '${req.method}' was not found.`
 })
});

export default router

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


// API KEY ROUTES - Admin

// Create an Api Key for a user
router.post("/api-key/create", async (req, res) => {
 try {
  let { email, subject, message, duration } = req.body;
  res.status(201).json({
   message: "POST /api/v1/apikey/ working"
  });
 } catch (err) {
  res.status(400).json({ error: err.message });
 }
});

// Delete an Api Key for a user
router.post("/api-key/create", async (req, res) => {
 try {
  let { email, subject, message, duration } = req.body;
  res.status(201).json({
   message: "POST /api/v1/apikey/ working"
  });
 } catch (err) {
  res.status(400).json({ error: err.message });
 }
});




// returns a newly created api key
// router.post("/create", async (req, res) => {
//  let { email } = req.body;
//  email = email.trim();
//  const generatedApiKey = uuidv4();
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


// Returns a newly created api key based on userId
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


// Testing user login
// router.post("/login", async (req: Request, res: Response) => {
//  try {
// Get req.body data from client
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



// OTP ROUTES

// verifies otp sent to user's email
// router.post("/otp/verify", async (req, res) => {
//  try {
//   let { email, otp } = req.body;
//   const validOTP = await verifyOTP({ email, otp });
//   res.status(201).json({ valid: validOTP });
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });

// creates and sends otp to user's email for verification
// router.post("/otp", async (req, res) => {
//  try {
//   let { email, subject, message, duration } = req.body;

// const createdOTP = await sendOTP({
//  email,
//  subject,
//  message,
//  duration
// })

//   res.status(201).json(createdOTP);
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });
