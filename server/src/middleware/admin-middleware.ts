import { Request, Response, NextFunction } from "express";

/**
 * Middleware to check if the user is an admin.
 */
export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden: Admins only" });
  }
  next();
}
