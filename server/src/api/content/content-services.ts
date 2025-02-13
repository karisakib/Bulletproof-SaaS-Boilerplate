import { ContentQueries } from "./content-queries";

export class ContentServices {
 // Get all blog posts or limit. All posts require -1 as limit.
 static async getAllBlogPosts(limit: number) {
  return ContentQueries.getPosts(limit);
 }

 static async getBlogPost(title: string) {
  return ContentQueries.findByTitle(title);
 }

 static async getBlogPostsByAuthor(author: string) {
  return ContentQueries.findByAuthor(author);
 }

}