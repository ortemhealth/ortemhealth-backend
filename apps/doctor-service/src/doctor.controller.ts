import { Controller, Get, Param } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get(':id')
  getDoctor(@Param('id') id: string) {
    return this.doctorService.findById(id);
  }
}
