import { DoctorService } from '../src/doctor.service';

describe('DoctorService', () => {
  it('should fetch doctor by ID', async () => {
    const svc = new DoctorService();
    const doctor = await svc.findById('1');
    expect(doctor).toBeDefined();
    expect(doctor.id).toBe('1');
  });
});
