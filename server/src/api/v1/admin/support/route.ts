// Support Management:
import { Router, Request, Response } from "express";
const router: Router = Router();


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