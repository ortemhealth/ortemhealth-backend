import { AppointmentService } from '../src/appointment.service';

describe('AppointmentService', () => {
  it('should book appointment', async () => {
    const svc = new AppointmentService();
    const dto = { patientId: '1', doctorId: '2', slot: '2023-10-25T10:20:00Z' };
    const result = await svc.book(dto as any);
    expect(result.success).toBe(true);
  });
});
