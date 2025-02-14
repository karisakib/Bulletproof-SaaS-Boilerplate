import { Router, Request, Response } from 'express';
import api from './api/index';

const router: Router = Router();

/**
 * Path: /api/*
 */
router.use('/api', api);

router.use("/api/*", (req: Request, res: Response) => {
 // next(createError(404, "API route not found"));
 res.status(404).json({
  status: "error",
  message: "Not Found",
 });
});

export default router;