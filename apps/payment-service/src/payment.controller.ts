import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ProcessPaymentDto } from '../../../libs/shared/src/dtos/payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async process(@Body() dto: ProcessPaymentDto) {
    return this.paymentService.process(dto);
  }
}
