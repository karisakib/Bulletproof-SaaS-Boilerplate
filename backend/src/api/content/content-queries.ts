// https://www.prisma.io/express#express-tabs

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ContentQueries {
 static async getPosts(limit: number) {
  if (limit === -1) return prisma.blog.findMany();
  return prisma.blog.findMany({ take: limit});
 }

 static async findByTitle(title: string) {
  return prisma.blog.findUnique({ where: { title } });
 }

 static async findByAuthor(author: string) {
  return prisma.blog.findMany({ where: { author } });
 }
}