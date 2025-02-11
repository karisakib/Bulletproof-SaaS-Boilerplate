// Content Management Routes
import { Router, Request, Response } from "express";
const router: Router = Router();

// Manage Site Content:

// View Content: GET /admin/content
router.get("/", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});


// Create Content: POST /admin/content
router.post("/", (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Edit Content: PUT /admin/content/:contentId
router.put("/:contentId", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Delete Content: DELETE /admin/content/:contentId
router.delete("/:contentId", (req: Request, res: Response) => {
 res.status(204).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Manage Media:

// View Media: GET /admin/media
router.get("/media", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Upload Media: POST /admin/media
router.post("/media", (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Delete Media: DELETE /admin/media/:mediaId
router.delete("/content/:contentId", (req: Request, res: Response) => {
 res.status(204).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

export default router