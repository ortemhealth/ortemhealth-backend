import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { BookAppointmentDto } from '../../../libs/shared/src/dtos/appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  book(@Body() dto: BookAppointmentDto) {
    return this.appointmentService.book(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findById(id);
  }
}

