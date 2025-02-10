import { UserService } from './user-queries';
import { UserQueries } from './user-queries';

jest.mock('./user-queries')

describe('User Service', () => {
 it('should hash password and create a user', async () => {
  (UserQueries.findByEmail as jest.Mock).mockResolvedValue(null);
  (UserQueries.createUser as jest.Mock).mockResolvedValue({ id: 1 });

  const user = await UserService.register('test@example.com', 'password');
  expect(user.id).toBe(1);
 });
});