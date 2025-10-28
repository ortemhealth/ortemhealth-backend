export enum NotificationChannel {
  EMAIL = 'email',
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  PUSH = 'push',
}

export class Notification {
  id: string;
  userId: string;
  channel: NotificationChannel;
  subject: string;
  message: string;
  sent: boolean;
  sentAt?: Date;
  createdAt: Date;
}
