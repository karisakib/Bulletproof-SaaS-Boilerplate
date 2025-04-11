import { Request, Response } from "express";
import { ContentServices } from "./content-services";

export class ContentHandlers {

 static async getAllBlogPosts(req: Request, res: Response) {
  try {
   // const post = await ContentServices.getAllBlogPosts(-1);
   res.status(200).json({
    success: true
   })
  } catch (error) {
   res.status(400).json({ message: error.message })
  }
 }

 static async getBlogPost(req: Request, res: Response) {
  try {
   res.status(200).json({
    success: true
   })
  } catch (error) {
   res.status(400).json({ message: error.message })
  }
 }


}