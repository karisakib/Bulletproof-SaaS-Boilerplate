// https://www.prisma.io/express#express-tabs

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SupportQueries {
 static async findByTicketId(email: string) {
  return prisma.user.findUnique({ where: { email } });
 }

 static async getAllTickets(email: string) {
  return prisma.user.findUnique({ where: { email } });
 }

 static async createTicket(email: string, hash: string, subscription: string) {
  return prisma.user.create({ data: { email, hash, subscription } });
 }
}