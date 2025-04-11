import { Request, Response } from "express";
import { SupportService } from "./support-services";

export class SupportHandlers {
 static async register(req: Request, res: Response) {
  try {
   const { email, password } = req.body;
   const user = await AuthService.register(email, password, subscription);
   res.status(201).json({ message: "User created."})
  } catch (error) {
   res.status(400).json({ message: error.message })
  }
 }

 static async login(req: Request, res: Response) {
  try {
   const { email, password } = req.body;
   const user = await AuthService.login(email, password);
   res.status(201).json({ message: "User created."})
  } catch (error) {
   res.status(400).json({ message: error.message })
  }
 }
}