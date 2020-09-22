import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-microsoft';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(Strategy, 'microsoft') {
    constructor() {
        super({
          clientID: process.env.clientID,
          clientSecret: process.env.clientSecret,
          callbackURL: 'http://localhost:3000/microsoft/redirect',
          scope: ['user.read'],
        });
    }

    async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        // const { name, emails, photos } = profile
        // const user = {
        //   email: emails[0].value,
        //   firstName: name.givenName,
        //   lastName: name.familyName,
        //   picture: photos[0].value,
        //   accessToken
        // }
        done(null, profile);
      }
}