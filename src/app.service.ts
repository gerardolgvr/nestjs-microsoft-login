import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  microsoftLogin(req) {
    if (!req.user) {
      return 'No user from microsoft'
    }

    return {
      message: 'User information from microsoft',
      user: req.user
    }
  }
}
