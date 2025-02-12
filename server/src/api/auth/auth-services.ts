import { AuthQueries } from "./auth-queries";
import bcrypt from "bcrypt";

export class AuthService {
 // Register a new user
 static async register(email: string, password: string) {
  const existingUser = await AuthQueries.findByEmail(email);
  if (existingUser) throw new Error("User already exists");

  const hash = await bcrypt.hash(password, 4);
  return AuthQueries.createUser(email, hash);
 }

 static async login(email: string, password: string) {
  const user = await AuthQueries.findByEmail(email);
  if (!user) throw new Error("User not found");

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error("Invalid credentials");

  return { message: "Login successful", email: user.email };
 }

}