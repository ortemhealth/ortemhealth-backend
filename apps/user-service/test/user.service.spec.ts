import { UserService } from '../src/user.service';

describe('UserService', () => {
  it('should fetch user by ID', async () => {
    const userService = new UserService();
    const user = await userService.findById('1');
    expect(user).toBeDefined();
    expect(user.id).toBe('1');
  });
});
