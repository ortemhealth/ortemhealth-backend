import { Injectable } from '@nestjs/common';
import { ProcessPaymentDto } from '../../../libs/shared/src/dtos/payment.dto';

@Injectable()
export class PaymentService {
  async process(dto: ProcessPaymentDto) {
    // TODO: Integrate with Razorpay/Stripe API
    return { status: 'success', paymentId: 'test_' + Date.now() };
  }
}
