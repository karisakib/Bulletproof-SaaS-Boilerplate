import { Router, Request, Response } from "express";
const router: Router = Router();

// Get all support tickets
router.get("/", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Get a specific support ticket
router.get("/:id", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Catch-all 404 for invalid sub-routes inside `/users`
router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
   error: "Not Found",
   message: `The requested user resource '${req.originalUrl}' does not exist.`,
 });
});

export default router;