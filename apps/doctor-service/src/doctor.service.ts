import { Injectable } from '@nestjs/common';
import { Doctor } from '../../../libs/shared/src/entities/doctor.entity';

@Injectable()
export class DoctorService {
  async findById(id: string): Promise<Doctor> {
    // TODO: Fetch doctor from DB
    return { id, firstName: 'Amit', lastName: 'Sharma', specialty: 'Cardiology' } as Doctor;
  }
}
