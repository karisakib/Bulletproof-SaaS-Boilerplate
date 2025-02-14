// https://www.prisma.io/express#express-tabs

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthQueries {
 static async findByEmail(email: string) {
  return prisma.user.findUnique({
   where: { email }
  });
 }

 static async createUser(email: string, hash: string, subscription: string) {
  return prisma.user.create({
   data: { email, hash, subscription }
  });
 }

 static async createOtpByEmail(email: string) {
  return prisma.user.findUnique({
   where: { email },
   select: { otp: true }
  });
 }


 static async findOtpByEmail(email: string) {
  return prisma.user.findUnique({
   where: { email },
   select: { otp: true }
  });
 }

 static async clearOtpByEmail(email: string) {
  return prisma.user.update({
   where: { email },
   data: { otp: null }
  })
 }
}