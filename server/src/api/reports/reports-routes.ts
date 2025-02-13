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


/**
 * @path /api/v1/financial/summary
 * @method get
 * @param
 * @summary returns financial summary of SaaS app and KPIs
 */
// router.get("/summary", getFinancialSummary);


// Financial Management:
// View Financial Statements: GET /admin/financial/statements
router.get("/financial/statements", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Generate Financial Reports: POST /admin/financial/reports
router.post("/financial/reports", (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Manage Invoices:
// View Invoices: GET /admin/financial/invoices
router.get("/financial/statements", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Create Invoice: POST /admin/financial/invoices
router.post("/financial/invoices", (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});


// Subscription Management:
// View Subscriptions: GET /admin/financial/subscriptions
router.put("/financial/subscriptions", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Edit Subscription Plans: PUT /admin/financial/subscriptions/:subscriptionId
router.put("/financial/subscriptions/:subscriptionId", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Cancel Subscriptions: DELETE /admin/financial/subscriptions/:subscriptionId
router.put("/financial/subscriptions/:subscriptionId", (req: Request, res: Response) => {
 res.status(204).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});


export default router