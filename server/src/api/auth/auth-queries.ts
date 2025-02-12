// https://www.prisma.io/express#express-tabs

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthQueries {
 static async findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
 }

 static async createUser(email: string, hash: string) {
  return prisma.user.create({ data: { email, hash } });
 }
}