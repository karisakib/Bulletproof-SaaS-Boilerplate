import { Router, Request, Response } from "express";
const router: Router = Router();

// Get all settings
router.get("/", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Get a specific setting
router.get("/:field", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Update a specific setting
router.put("/:field", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Catch-all 404 for invalid sub-routes inside `/settings`
router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`
 })
});

export default router;