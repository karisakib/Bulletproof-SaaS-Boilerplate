import request from 'supertest';
import express from 'express';
import { UserHandlers } from './user-queries';

const app = express();
app.use(express.json());
app.post('/register', UserHandlers.register);

describe('UserHandlers', () => {
 it('should register a user', async () => {
  const response = await request(app)
   .post('/register')
   .send({ email: 'test@example.com', password: 'password' });

  expect(response.status).toBe(201);
 });
});