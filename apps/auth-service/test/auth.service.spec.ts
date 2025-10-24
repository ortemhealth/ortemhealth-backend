import { AuthService } from '../src/auth.service';

describe('AuthService', () => {
  it('should return token and user on register', async () => {
    const authService = new AuthService({ sign: () => 'signed_jwt' } as any);
    const result = await authService.register({
      email: 'a@test.com',
      password: 'test',
      role: 'patient'
    });
    expect(result.token).toBeDefined();
    expect(result.user.email).toBe('a@test.com');
  });
});
