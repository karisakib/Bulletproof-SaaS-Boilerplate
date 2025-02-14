import { SupportQueries } from "./support-queries";

export class SupportServiceService {
 // Register a new user
 static async register(email: string, password: string, subscription: string) {
  const existingUser = await SupportQueries.findByEmail(email);
  if (existingUser) throw new Error("User already exists");
  if (existingUser==null || existingUser == undefined) {
   return SupportQueries.createUser(email, subscription);
  }
 }

 static async login(email: string, password: string) {
  const user = await AuthQueries.findByEmail(email);
  if (!user) throw new Error("User not found");

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error("Invalid credentials");

  return { message: "Login successful", email: user.email };
 }

 static async sendWelcomeEmail(email: string) {

 }
}