import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CookieController } from './cookie/cookie.controller';
import { SessionController } from './session/session.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, CookieController, SessionController],
  providers: [],
})
export class AppModule {}
