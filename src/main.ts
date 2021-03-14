import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { grpcClientOption } from './grpc-client.option';

async function bootstrap() {
  const BOOTSTRAP_CONTEXT = 'Bootstrap';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOption,
  );

  app.listen(() => Logger.debug('Microservice started', BOOTSTRAP_CONTEXT));
}
bootstrap();
