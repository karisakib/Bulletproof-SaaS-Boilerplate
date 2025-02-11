// Notifications Management:
import { Router, Request, Response } from "express";
const router: Router = Router();

// View Notifications: GET /admin/notifications
router.get("/notifications", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Create Notifications: POST /admin/notifications
router.post("/notifications", (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Edit Notifications: PUT /admin/notifications/:notificationId
router.put("/notifications/:notificationId", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Delete Notifications: DELETE /admin/notifications/:notificationId
router.delete("/notifications/:notificationId", (req: Request, res: Response) => {
 res.status(204).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Should this go into settings?
// Manage Notification Settings: PUT /admin/notifications/settings
router.put("/notifications/settings", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

export default router