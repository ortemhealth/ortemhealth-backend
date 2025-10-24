import { Controller, Get, Param } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get(':id')
  getPatient(@Param('id') id: string) {
    return this.patientService.findById(id);
  }
}
