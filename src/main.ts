import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * AppModule as an main module
   */
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
