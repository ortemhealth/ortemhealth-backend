import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from '../../../libs/shared/src/dtos/notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  send(@Body() dto: SendNotificationDto) {
    return this.notificationService.send(dto);
  }
}
