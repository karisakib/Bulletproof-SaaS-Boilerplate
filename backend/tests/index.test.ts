import request, { Response } from 'supertest';
import app from "../src/server";
import { AuthService } from '@/api/auth/auth-services';
// https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/
// https://github.com/porsager/postgres?tab=readme-ov-file


// Arrange - Act - Assert model from 'Tao of Node'

describe('Register a new user', () => {
 it('should successfully create a new user', async (): Promise<void> => {
  // 1. Arrange - prepare the data, create any objects you need
  const mockUser = {
   firstName: "User",
   lastName: "Name",
   email: "example@email.com",
   password: "password"
  }
  // 2. Act - execute the logic that you're testing
  const res: Response = await request(app).get('/')
  const result = AuthService.register(mockUser.email, mockUser.password)

  // 3. Assert - validate the expected result
  expect(res.statusCode).toEqual(201)
  expect(result).toEqual({ success: true, message: "User created successfully" })
 })
})