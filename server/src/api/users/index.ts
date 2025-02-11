import { Router, Request, Response } from "express";
const router: Router = Router();

// Get user profile details
router.get("/profile", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Update user profile details
router.put("/profile", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Upload user avatar
router.post("/profile/avatar", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Update user contact information
router.put("/profile/contact-info", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Delete user profile
router.delete("/profile", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})


/** ADMIN ONLY ROUTES */
// Get all users
router.get("/", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "All users" });
})

// Get user by ID
router.get("/:userId", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "userId" });
})

// Update user role
router.patch("/:userId/role", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "Updated: user:role" });
})

// Delete user
router.delete("/:userId", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "Deleted: user with id" });
})

// IP ban user
router.patch("/:userId/ban", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "Updated: userId banned" });
  // IP black list user information
  // Mark user as banned
})

export default router;

// User routes
// router.get("/profile", authenticate, UserController.getProfile);
// router.put("/profile", authenticate, UserController.updateProfile);

// Admin-only routes
// router.get("/", authenticate, isAdmin, UserController.getAllUsers);
// router.get("/:userId", authenticate, isAdmin, UserController.getUserById);
// router.patch("/:userId/role", authenticate, isAdmin, UserController.updateUserRole);
// router.delete("/:userId", authenticate, isAdmin, UserController.deleteUser);

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`
 })
});