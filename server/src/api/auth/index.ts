import { Router, Request, Response } from "express";
const router: Router = Router();

// Authentication Routes

// Register
router.post("/register", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "Created: new user" });
 // If method is GET, "Did you mean to use POST?"
});

// Login
router.post("/login", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "User logged in" });
});

// Logout
router.post("/logout", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "User logged out" });
}
);

// Forgot Password
router.post("/forgot-password", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "Requesting password update" });
});

// Reset Password
router.post("/reset-password", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "User password is reset" });
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
  message: `The requested resource '${req.originalUrl}' was not found.`
 })
});

export default router;
