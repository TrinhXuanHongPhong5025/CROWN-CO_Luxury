import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CookieController } from './cookie/cookie.controller';

@Module({
  imports: [],
  controllers: [AppController, CookieController],
  providers: [],
})
export class AppModule {}
