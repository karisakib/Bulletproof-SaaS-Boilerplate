// System Settings:
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

// View System Settings: GET /admin/settings
router.get("/settings", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Update System Settings: PUT /admin/settings
router.put("/settings", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Manage Maintenance Mode: PATCH /admin/settings/maintenance
router.patch("/settings/maintenance", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Configure Integrations: POST/PUT /admin/settings/integrations
router.post("/settings/integrations", (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// This might now belong here?
// View System Logs: GET /admin/logs/system

// Should this be it's own sub-resource?
// Manage API Keys:
// View API Keys: GET /admin/settings/api-keys
// Generate API Key: POST /admin/settings/api-keys
// Revoke API Key: DELETE /admin/settings/api-keys/:keyId


// Notifications Management:


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