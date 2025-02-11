// System Settings:
import { Router, Request, Response } from "express";
const router: Router = Router();



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

export default router