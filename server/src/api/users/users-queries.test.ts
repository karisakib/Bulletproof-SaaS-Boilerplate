import { PrismaClient } from 'prisma/client';
import { UserQueries } from './users-queries';

jest.mock('prisma/client');

describe('User Queries', () => {
 it('should finds a user by email', async () => {
  const prismaMock = new PrismaClient();
  (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1 });

  const user = await UserQueries.register('test@example.com', 'password');
  expect(user.id).toBe(1);
 });
});