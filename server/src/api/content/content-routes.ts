// Content Management Routes
import { Router, Request, Response } from "express";
import { checkSchema } from "express-validator";
import { contentSchemas } from "./content-schemas"
import { ContentHandlers } from "./content-handlers";

const router: Router = Router();

// Manage Site Content:

// Get all blog posts
router.get("/blog", ContentHandlers.getAllBlogPosts);

// Get a specific blog post
router.get("/blog/:title",
 checkSchema(contentSchemas.getPost),
 async (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});


// Create a new blog post - admin
router.post("/blog",
 checkSchema(contentSchemas.createPost),
 async (req: Request, res: Response) => {
 res.status(201).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Update a blog post - admin
router.put("blog/:title", (req: Request, res: Response) => {
 res.status(200).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});

// Delete a blog post - admin
router.delete("blog/:title", (req: Request, res: Response) => {
 res.status(204).json({
  status: "OK",
  path: req.baseUrl,
  message: "working"
 })
});



// Get announcement banner
router.get("/banner", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Create announcement banner
router.post("/banner", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Update announcement banner
router.put("/banner", async (req: Request, res: Response) => {
 res.status(200).json({ status: "OK", message: "working" });
});

// Remove announcement banner
router.delete("/banner", async (req: Request, res: Response) => {
 res.status(204).json({ status: "OK", message: "working" });
});

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`,
 });
});


// Manage Media: - admin

// View Media: GET /admin/media
// router.get("/media", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// Upload Media: POST /admin/media
// router.post("/media", (req: Request, res: Response) => {
//  res.status(201).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// Delete Media: DELETE /admin/media/:mediaId
// router.delete("/content/:contentId", (req: Request, res: Response) => {
//  res.status(204).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

export default router