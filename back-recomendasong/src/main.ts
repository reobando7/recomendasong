import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './database/data-source';

import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await AppDataSource.initialize()
  await app.listen(3000);
}
bootstrap();
