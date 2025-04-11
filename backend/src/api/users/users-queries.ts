
// *-queries.ts (Database Logic)
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UserQueries {
 static async findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
 }


}