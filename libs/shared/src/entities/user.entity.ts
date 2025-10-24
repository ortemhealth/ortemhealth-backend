export class User {
  id: string;
  email: string;
  password?: string;
  role: 'patient' | 'doctor' | 'admin';
}
