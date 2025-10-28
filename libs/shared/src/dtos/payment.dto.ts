import { IsNumber, IsString, IsEnum } from 'class-validator';
import { PaymentStatus } from '../entities/payment.entity';

export class ProcessPaymentDto {
  @IsString() appointmentId: string;
  @IsString() userId: string;
  @IsNumber() amount: number;
  @IsString() currency: string;
  @IsString() gateway: string;
}

export class UpdatePaymentStatusDto {
  @IsEnum(PaymentStatus) status: PaymentStatus;
}
