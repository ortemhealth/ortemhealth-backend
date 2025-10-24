import { PaymentService } from '../src/payment.service';

describe('PaymentService', () => {
  it('should mark payment as success', async () => {
    const svc = new PaymentService();
    const dto = { amount: 500, method: 'upi', userId: '123' };
    const result = await svc.process(dto as any);
    expect(result.status).toBe('success');
  });
});
