import { IsString, IsDateString, IsEnum } from 'class-validator';
import { AppointmentStatus } from '../entities/appointment.entity';

export class BookAppointmentDto {
  @IsString() patientId: string;
  @IsString() doctorId: string;
  @IsDateString() timeSlot: string;
  @IsString() reason: string;
}

export class UpdateStatusDto {
  @IsEnum(AppointmentStatus) status: AppointmentStatus;
}
