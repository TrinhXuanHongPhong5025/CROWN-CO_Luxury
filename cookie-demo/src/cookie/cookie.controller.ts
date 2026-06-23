import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cookie')
export class CookieController {
  @Get('set')
  setCookie(
    @Res({ passthrough: true })
    response: Response,
  ) {
    response.cookie('username', 'admin');
    return { message: 'Cookie created' };
  }

  @Get('get')
  getCookie(@Req() request: Request) {
    return request.cookies;
  }

  @Get('username')
  getUsername(@Req() request: Request) {
    return { username: request.cookies.username };
  }

  @Get('delete')
  deleteCookie(
    @Res({ passthrough: true })
    response: Response,
  ) {
    response.clearCookie('username');
    return { message: 'Deleted' };
  }
}
