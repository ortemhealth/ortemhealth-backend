import { NotificationService } from '../src/notification.service';

describe('NotificationService', () => {
  it('should mark notifications as delivered', async () => {
    const svc = new NotificationService();
    const dto = { channel: 'email', to: 'a@b.c', message: 'hi' };
    const result = await svc.send(dto as any);
    expect(result.delivered).toBe(true);
  });
});
