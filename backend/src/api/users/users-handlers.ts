import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserService } from "./users-services";

export class UserHandlers {
 static async getUserProfile(req: Request, res: Response) {
  try {
   res.status(200).json({ success: true, message: "user #$%^&**&^%" });
  } catch (error) {
   res
    .status(500)
    .json({ success: false, message: "Internal server error" });
  }
 }

 

}