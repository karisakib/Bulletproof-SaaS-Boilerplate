import { Router, Request, Response } from "express";
const router: Router = Router();

/**
 * This domain is dedicated to all types of reports
 * Whether it be financial, user, or system reports
*/

// Health Check
router.get("/health", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// User Activity Reports: GET /admin/reports/user-activity
router.get("/user-activity", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// System Performance Reports: GET /admin/reports/system-performance
router.get("/system-performance", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// View Audit Logs: GET /admin/reports/logs/audit
router.get("/logs/audit", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`
 })
});

export default router;