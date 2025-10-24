import { PatientService } from '../src/patient.service';

describe('PatientService', () => {
  it('should fetch patient by ID', async () => {
    const svc = new PatientService();
    const patient = await svc.findById('1');
    expect(patient).toBeDefined();
    expect(patient.id).toBe('1');
  });
});
