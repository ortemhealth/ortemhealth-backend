export class Patient {
  id: string;
  userId: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}
