import { AppointmentService } from '../src/appointment.service';

describe('AppointmentService (integration)', () => {
  const service = new AppointmentService();
  it('books and fetches an appointment', async () => {
    const appt = await service.book({
      patientId: '1',
      doctorId: '2',
      timeSlot: new Date().toISOString(),
      reason: 'Checkup'
    });
    const fetched = await service.findById(appt.id);
    expect(fetched.id).toBe(appt.id);
  });
});
