// Role and Permission Management:
import { Router, Request, Response } from "express";
const router: Router = Router();


// View Roles: GET /admin/roles
router.get("/roles/", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Create Role: POST /admin/roles
router.post("/roles", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});


// Edit Role: PUT /admin/roles/:roleId
router.put("/roles/:roleId", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Delete Role: DELETE /admin/roles/:roleId
router.delete("/roles/:roleId", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});


// Assign Role: POST /users/roles/assign
// Revoke Role: DELETE /users/roles/revoke

// Assign/Revoke Role to/from User: PATCH /admin/roles/users/:userId

// View Permissions: GET /admin/roles/:roleId/permissions
// Edit Permissions: PUT /admin/roles/:roleId/permissions

export default router