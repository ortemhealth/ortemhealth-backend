import { IsString, IsEnum } from 'class-validator';
import { NotificationChannel } from '../entities/notification.entity';

export class SendNotificationDto {
  @IsString() userId: string;
  @IsEnum(NotificationChannel) channel: NotificationChannel;
  @IsString() subject: string;
  @IsString() message: string;
}
