import { Injectable } from '@nestjs/common';
import { SendNotificationDto } from '../../../libs/shared/src/dtos/notification.dto';

@Injectable()
export class NotificationService {
  async send(dto: SendNotificationDto) {
    // TODO: Integrate with email/sms provider
    return { delivered: true, channel: dto.channel, to: dto.to };
  }
}
