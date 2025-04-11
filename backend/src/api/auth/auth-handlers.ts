import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { AuthService } from "./auth-services";

export class AuthHandlers {
 static async register(req: Request, res: Response) {
  try {
   const errors = validationResult(req)

   if (!errors.isEmpty()) {
       res.status(400).json({ status: "ERROR", errors: errors.array() });
       return;
   }

   const { email, password } = req.body;
   const user = await AuthService.register(email, password);
   res.status(201).json({ message: "User created."})
  } catch (error: any) {
   res.status(400).json({ message: error.message })
  }
 }

 static async login(req: Request, res: Response) {
  try {
   const { email, password } = req.body;
   const user = await AuthService.login(email, password);
   res.status(201).json({ message: "User created."})
  } catch (error: any) {
   res.status(400).json({ message: error.message })
  }
 }

 static async sendOtp(req: Request, res: Response) {
  try {
   const { email, password } = req.body;
   const user = await AuthService.login(email, password);
   res.status(201).json({ message: "User created."})
  } catch (error: any) {
   res.status(400).json({ message: error.message })
  }
 }

 static async verifyOtp(req: Request, res: Response) {
  try {
   // if no email || no otp -> return error
   // if otp found -> find match
   // if no match -> return error
   // if match -> check if expired
   // if expired -> return error
   // if not expired -> verify otp
   // if verified -> verify user and return success true
  } catch (error: any) {
   res.status(400).json({ message: error.message })
  }
 }

 static async deleteOtp(req: Request, res: Response) {
  try {
   // if no email || no otp -> return error
   // if otp found -> delete otp from db and return success true
   // if no otp -> return success true
  } catch (error: any) {
   res.status(400).json({ message: error.message })
  }
 }

}