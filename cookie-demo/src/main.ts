import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(
    session({
      secret: 'my-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(3000);
}

void bootstrap();
