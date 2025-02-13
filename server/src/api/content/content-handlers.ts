import { Request, Response } from "express";
import { ContentServices } from "./content-services";

export class ContentHandlers {
 static async getAllBlogPosts(req: Request, res: Response) {
  try {
   // const post = await ContentServices.getAllBlogPosts(-1);
   res.status(200).json({
    status: "OK",
    path: req.baseUrl,
    message: "working"
   })
  } catch (error) {
   res.status(400).json({ message: error.message })
  }
 }
}