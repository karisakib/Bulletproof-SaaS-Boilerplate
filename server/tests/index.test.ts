import request, { Response } from 'supertest';
import { Express } from 'express';
import app from "../src/server";
// https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/
// https://github.com/porsager/postgres?tab=readme-ov-file


// Arrange - Act - Assert model from 'Tao of Node'

describe('Home Endpoint', () => {
 it('should bring us to the home page', async (): Promise<void> => {
  // 1. Arrange - prepare the data, create any objects you need
  // const user = {
  // name: "...",
  // age: 27
  //    }
  // 2. Act - execute the logic that you're testing
  const res: Response = await request(app).get('/')
  // const result = userService.create(mockUser)

  // 3. Assert - validate the expected result
  expect(res.statusCode).toEqual(200)
 })
})


// describe('User Service', () => {
//  it('Should create a user given correct data', async () => {
//   // 1. Arrange - prepare the data, create any objects you need
//    const mockUser = {
//      // ...
//    }
//    const userService = createUserService(
//      mockLogger,
//      mockQueryBuilder
//    )

//    // 2. Act - execute the logic that you're testing
//    const result = userService.create(mockUser)

//    // 3. Assert - validate the expected result
//    expect(mockLogger).toHaveBeenCalled()
//    expect(mockQueryBuilder).toHaveBeenCalled()
//    expect(result).toEqual(/** ... */)
//  })
// })