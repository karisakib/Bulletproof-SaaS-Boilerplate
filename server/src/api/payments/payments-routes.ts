import { Router, Request, Response } from "express";
const router: Router = Router();

// Get promo code
router.get("/promo", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Create promo code
router.post("/promo", async (req: Request, res: Response) => {
 res
  .status(201)
  .json({ status: "OK", message: "working" });
})

// Update promo code
router.put("/promo", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Delete promo code
router.delete("/promo", async (req: Request, res: Response) => {
 res
  .status(204)
  .json({ status: "OK", message: "working" });
})

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`
 })
});

export default router;