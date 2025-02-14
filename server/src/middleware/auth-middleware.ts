import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

const { JWT_KEY } = process.env;

/**
 * Middleware to check if the user is an admin.
 */
export async function verifyToken(req: Request, res: Response, next: NextFunction) {
 const token = req.body.token || req.query.token || req.headers["X-Access-Token"];

 // No token: error
 if (!token) {
  return res.status(403).send("Authentication token required.");
 }

 // If token: verify token
 try {
  const decodedToken = jwt.decode(token, JWT_KEY);
  req.currentUser = decodedToken;
 } catch (error) {
  return res.status(401).send("Invalid token provided.");
 }
 next();
};