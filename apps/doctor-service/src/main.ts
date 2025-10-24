import { NestFactory } from '@nestjs/core';
import { DoctorModule } from './doctor.module';

async function bootstrap() {
  const app = await NestFactory.create(DoctorModule);
  await app.listen(3006);
}
bootstrap();
