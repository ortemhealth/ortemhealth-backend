import { Injectable } from '@nestjs/common';
import { Patient } from '../../../libs/shared/src/entities/patient.entity';

@Injectable()
export class PatientService {
  async findById(id: string): Promise<Patient> {
    // TODO: Fetch patient from DB
    return { id, firstName: 'Priya', lastName: 'Gupta', dateOfBirth: '1992-07-10' } as Patient;
  }
}
