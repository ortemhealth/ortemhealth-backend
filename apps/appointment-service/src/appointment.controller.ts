import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { BookAppointmentDto, UpdateStatusDto } from '../../../libs/shared/src/dtos/appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Post()
  async book(@Body() dto: BookAppointmentDto) {
    return this.service.book(dto);
  }

  @Get(':id')
  async one(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Get('user/:userId')
  async listByUser(@Param('userId') userId: string) {
    return this.service.listByUser(userId);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.service.updateStatus(id, dto);
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    return this.service.cancel(id);
  }
}
