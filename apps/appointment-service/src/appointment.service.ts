import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaClient, Appointment } from '@prisma/client';
import { BookAppointmentDto, UpdateStatusDto } from '../../../libs/shared/src/dtos/appointment.dto';

@Injectable()
export class AppointmentService {
  private prisma = new PrismaClient();

  async book(dto: BookAppointmentDto): Promise<Appointment> {
    // Check for conflicts in slots
    const conflict = await this.prisma.appointment.findFirst({
      where: {
        doctorId: dto.doctorId,
        timeSlot: new Date(dto.timeSlot),
        status: { not: 'cancelled' }
      }
    });
    if (conflict) throw new BadRequestException('Slot already booked');
    return this.prisma.appointment.create({
      data: {
        patientId: dto.patientId,
        doctorId: dto.doctorId,
        timeSlot: new Date(dto.timeSlot),
        reason: dto.reason,
        status: 'scheduled'
      }
    });
  }

  async findById(id: string): Promise<Appointment> {
    const appt = await this.prisma.appointment.findUnique({ where: { id } });
    if (!appt) throw new NotFoundException('Appointment not found');
    return appt;
  }

  async listByUser(userId: string): Promise<Appointment[]> {
    // As patient
    return this.prisma.appointment.findMany({ where: { patientId: userId } });
  }

  async updateStatus(id: string, dto: UpdateStatusDto): Promise<Appointment> {
    const appt = await this.prisma.appointment.update({
      where: { id },
      data: { status: dto.status }
    });
    return appt;
  }

  async cancel(id: string): Promise<Appointment> {
    return this.prisma.appointment.update({
      where: { id },
      data: { status: 'cancelled' }
    });
  }
}
