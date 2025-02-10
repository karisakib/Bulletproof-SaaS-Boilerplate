import { Request, Response, Router } from "express";

const router = Router();

// *-routes.ts (API Routes)
router.post("/register", UserHandlers.register);
// router.post("/login", UserHandlers.login);


// *-handlers.ts (Route Handlers)
export class UserHandlers {
 static async register(req: Request, res: Response) {
  try {
   const { email, password } = req.body;
   const user = await UserService.register(email, password);
   res.status(201).json(user);
  } catch (err) {
   res.status(400).json({ error: err.message });
  }
 }
}

// *-service.ts (Business Logic)
// import {UserHandlers} from "./user-handlers";
import bcrypt from "bcrypt";

export class UserService {
 static async register(email: string, password: string) {
  const existingUser = await UserQueries.findByEmail(email);
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  return UserQueries.createUser(email, hashedPassword);
 }
}


// *-queries.ts (Database Logic)
import { PrismaClient } from "prisma/client";
const prisma = new PrismaClient();

export class UserQueries {
 static async findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
 }

 static async createUser(email: string, password: string) {
  return prisma.user.create({ data: { email, password } });
 }
}