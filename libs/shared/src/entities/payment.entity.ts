export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export class Payment {
  id: string;
  appointmentId: string;
  userId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  gateway: string;
  txnId: string;
  createdAt: Date;
  updatedAt: Date;
}
