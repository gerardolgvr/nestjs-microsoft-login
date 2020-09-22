import { Controller, Get, Req } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller('microsoft')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('microsoft'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('microsoft'))
  googleAuthRedirect(@Req() req) {
    return this.appService.microsoftLogin(req);
  }
}
