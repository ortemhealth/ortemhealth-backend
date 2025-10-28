export enum UserRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  ADMIN = 'admin',
}

export class User {
  id: string;
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
