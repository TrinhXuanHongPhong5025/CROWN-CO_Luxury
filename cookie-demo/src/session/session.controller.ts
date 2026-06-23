import { Controller, Get, Session } from '@nestjs/common';

@Controller('session')
export class SessionController {
  @Get()
  getSession(@Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
    return {
      visits: session.visits,
    };
  }
}
