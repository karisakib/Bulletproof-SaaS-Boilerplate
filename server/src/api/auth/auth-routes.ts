import { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { authSchemas } from "./auth-schemas";
import { AuthHandlers } from "./auth-handlers";

const router: Router = Router();

// Register - create new user and send welcome email
router.post("/register",
 checkSchema(authSchemas.register), AuthHandlers.register);


// Login - logs in user to app
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

// Logout - Delete sessionID, Cookies, or refreshToken
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


// Verification
router.post("/verify-reset", async (req, res) => {
 try {
  res.status(200).json({
   message: "Password Reset Verification",
  });
 } catch (error: any) {
  res.status(500).json({ error: err.message });
 }
});

// API Key
// Returns a newly created api key based on userId
router.get("api-key/:userId", async (req: Request, res: Response) => {
 try {
 // validate user details on schema
 // check if user exists
 // if api key exists, delete and create new one
 // if api key does not exist, create new one
 // return new api key
  res.status(201).json({
   message: `API KEY: ${`XXXX-XXXX-XXXX-XXXX`} created for user with email: ${`email`}`
  });
 } catch (error: any) {
  res.status(400).json({ error: error.message });
 }
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