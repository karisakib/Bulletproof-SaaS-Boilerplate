import { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import {authSchemas} from "./auth-schemas"
const router: Router = Router();

// Authentication Routes

// Register
router.post("/register",
 checkSchema(authSchemas.register),
 async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
   res.status(400).json({ status: "ERROR", errors: errors.array() });
   return;
  }

  res.status(200).json({
   status: "OK",
   message: "working",
   data: []
  });
 });


// Login
router.post("/login",
 checkSchema({
  email: {
   isEmail: { errorMessage: "Must be a valid e-mail address" },
   notEmpty: { errorMessage: "Email is required" },
  },
  password: {
   isString: {
    errorMessage: "Password must be strong (minLength: 8, uppercase, number, symbol required)",
   },
   isLength: { options: { min: 8 } }
  },
 }),
 async (req: Request, res: Response) => {

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
router.post("/logout", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "User logged out", data: [] });
}
);

// Forgot Password
router.post("/forgot-password", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "Requesting password update", data: [] });
});

// Reset Password
router.post("/reset-password", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "User password is reset", data: [] });
});

// OTP
router.post("/otp/:userId", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "Create and email generated OTP for userId" });
});

router.get("/otp/:userId", (req: Request, res: Response) => {
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

export default router;
