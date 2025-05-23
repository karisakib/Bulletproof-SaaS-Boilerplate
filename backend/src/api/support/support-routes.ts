// Support Management:
import { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { supportSchemas } from "./support-schemas";
import { SupportHandlers } from "./support-handlers";
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

// Manage Support Tickets:
// View Support Tickets: GET /admin/support/tickets
router.get("/support/tickets", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Assign Ticket: PATCH /admin/support/tickets/:ticketId/assign
router.patch("/settings/tickets/:ticketId/assign", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Close Ticket: PATCH /admin/support/tickets/:ticketId/close
router.patch("/support/tickets/:ticketId/close", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// View User Feedback: GET /admin/support/feedback
router.get("/support/feedback", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

export default router