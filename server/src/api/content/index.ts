import { Router, Request, Response } from "express";
const router: Router = Router();

// Get all blog posts
router.get("/blog", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Get a specific blog post
router.get("/blog/:postId", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Create a new blog post
router.post("/blog", async (req: Request, res: Response) => {
 res.status(201).json({ status: "OK", message: "working" });
});

// Update a blog post
router.put("/blog/:postId", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Delete a blog post
router.delete("/blog/:postId", async (req: Request, res: Response) => {
 res.status(204).json({ status: "OK", message: "working" });
});

// Get announcement banner
router.get("/banner", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Create announcement banner
router.post("/banner", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Update announcement banner
router.put("/banner", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Remove announcement banner
router.delete("/banner", async (req: Request, res: Response) => {
 res.status(204).json({ status: "OK", message: "working" });
});

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`,
 });
});

export default router;
